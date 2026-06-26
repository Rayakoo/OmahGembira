const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

function getConfig() {
  if (!supabaseUrl || !supabaseAnonKey) throw new Error("Supabase env vars not set");
  return { url: supabaseUrl, anonKey: supabaseAnonKey };
}

export type Profile = { id: string; full_name: string; role: string; created_at: string; updated_at: string };

export type User = {
  id: string;
  email: string;
  user_metadata: { full_name?: string; avatar_url?: string; role?: string };
};

function getStorageKey() {
  const projectId = supabaseUrl?.match(/\/\/([^.]+)/)?.[1] ?? "local";
  return `sb-${projectId}-auth-token`;
}

export function readSession() {
  const raw = localStorage.getItem(getStorageKey());
  if (!raw) return null;
  return JSON.parse(raw);
}

function saveSession(data: { access_token: string; refresh_token: string; user: { id: string; email: string } }) {
  localStorage.setItem(getStorageKey(), JSON.stringify({
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    expires_at: Date.now() + 3600 * 1000,
    user: data.user,
  }));
}

function saveOAuthSession(data: { access_token: string; refresh_token: string; user: { id: string; email: string } }) {
  saveSession(data);
}

export function getAccessToken(): string {
  const session = readSession();
  if (!session?.access_token) throw new Error("No access token");
  return session.access_token;
}

export async function getValidToken(): Promise<string> {
  const session = readSession();
  if (!session?.refresh_token) throw new Error("No refresh token");
  const expiresAt = session.expires_at || 0;
  if (Date.now() < expiresAt - 60_000) return session.access_token;

  const { url, anonKey } = getConfig();
  const res = await fetch(`${url}/auth/v1/token?grant_type=refresh_token`, {
    method: "POST",
    headers: { "Content-Type": "application/json", apikey: anonKey! },
    body: JSON.stringify({ refresh_token: session.refresh_token }),
  });
  if (!res.ok) throw new Error("Refresh token failed");
  const data = await res.json();
  saveSession({ access_token: data.access_token, refresh_token: data.refresh_token, user: data.user || session.user });
  return data.access_token;
}

async function getUserRole(userId: string, token?: string): Promise<string> {
  const t = token || (await getValidToken().catch(() => getAccessToken()));
  const { url, anonKey } = getConfig();
  const res = await fetch(`${url}/rest/v1/rpc/get_user_role`, {
    method: "POST",
    headers: { apikey: anonKey, Authorization: `Bearer ${t}`, "Content-Type": "application/json" },
    body: "{}",
  });
  if (!res.ok) return "user";
  const role = (await res.text()).replace(/"/g, "");
  localStorage.setItem("og-role", role);
  return role;
}

export async function signUp(email: string, password: string, fullName?: string) {
  const { url, anonKey } = getConfig();
  const res = await fetch(`${url}/auth/v1/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json", apikey: anonKey },
    body: JSON.stringify({ email, password, data: { full_name: fullName ?? "", role: "user" } }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.msg || err.error || "Sign up failed");
  }
  const data = await res.json();
  return {
    user: data.user
      ? { id: data.user.id, email: data.user.email!, user_metadata: { full_name: data.user.user_metadata?.full_name, role: "user" } }
      : null,
    session: null,
  };
}

export async function signIn(email: string, password: string) {
  const { url, anonKey } = getConfig();
  const res = await fetch(`${url}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: { "Content-Type": "application/json", apikey: anonKey },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.msg || err.error_description || "Login gagal");
  }
  const data = await res.json();

  const oldKey = Object.keys(localStorage).find((k) => k.startsWith("sb-") && k.endsWith("-auth-token"));
  if (oldKey) localStorage.removeItem(oldKey);

  saveSession({ access_token: data.access_token, refresh_token: data.refresh_token, user: data.user });

  const role = await getUserRole(data.user.id, data.access_token);
  return {
    user: { id: data.user.id, email: data.user.email!, user_metadata: { role } },
    session: { access_token: data.access_token, refresh_token: data.refresh_token },
  };
}

export async function signOut() {
  try {
    const { url, anonKey } = getConfig();
    const token = await getValidToken().catch(() => getAccessToken());
    await fetch(`${url}/auth/v1/logout`, {
      method: "POST",
      headers: { apikey: anonKey, Authorization: `Bearer ${token}` },
    });
  } catch {}
  const key = Object.keys(localStorage).find((k) => k.startsWith("sb-") && k.endsWith("-auth-token"));
  if (key) localStorage.removeItem(key);
  localStorage.removeItem("og-role");
}

export async function getCurrentUser(): Promise<User | null> {
  try {
    const token = await getValidToken().catch(() => getAccessToken());
    const { url, anonKey } = getConfig();
    const res = await fetch(`${url}/auth/v1/user`, {
      headers: { apikey: anonKey, Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Token invalid");
    const userData = await res.json();
    if (!userData?.id) throw new Error("No user");

    let role = "user";
    try { role = await getUserRole(userData.id, token); } catch {}

    return { id: userData.id, email: userData.email!, user_metadata: { role } };
  } catch {
    const session = readSession();
    if (session?.user) {
      return { id: session.user.id, email: session.user.email || "", user_metadata: { role: localStorage.getItem("og-role") || "user" } };
    }
    return null;
  }
}

export async function exchangeOAuthCode(code: string) {
  const { url, anonKey } = getConfig();
  const { createClient } = await import("@supabase/supabase-js");
  const supabase = createClient(url, anonKey);
  const { data, error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) throw error;
  if (data.session) {
    saveOAuthSession({
      access_token: data.session.access_token,
      refresh_token: data.session.refresh_token,
      user: { id: data.session.user.id, email: data.session.user.email! },
    });
  }
  return data;
}

export function handleImplicitFlow() {
  const hash = window.location.hash;
  if (!hash || !hash.includes("access_token=")) return false;
  const params = new URLSearchParams(hash.replace(/^#/, ""));
  const access_token = params.get("access_token");
  const refresh_token = params.get("refresh_token");
  if (!access_token) return false;
  let userId = "", email = "";
  try { const p = JSON.parse(atob(access_token.split(".")[1])); userId = p.sub; email = p.email; } catch {}
  saveOAuthSession({ access_token, refresh_token: refresh_token || "", user: { id: userId, email } });
  return true;
}

export async function getProfiles(): Promise<Profile[]> {
  const token = await getValidToken().catch(() => getAccessToken());
  const { url, anonKey } = getConfig();
  const res = await fetch(`${url}/rest/v1/rpc/get_all_profiles_admin`, {
    method: "POST",
    headers: { apikey: anonKey, Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: "{}",
  });
  if (!res.ok) throw new Error("Failed to fetch profiles");
  return res.json();
}

export async function updateUserRole(userId: string, newRole: string): Promise<void> {
  const token = await getValidToken().catch(() => getAccessToken());
  const { url, anonKey } = getConfig();
  const res = await fetch(`${url}/rest/v1/rpc/update_user_role_admin`, {
    method: "POST",
    headers: { "Content-Type": "application/json", apikey: anonKey, Authorization: `Bearer ${token}` },
    body: JSON.stringify({ user_id: userId, new_role: newRole }),
  });
  if (!res.ok) throw new Error(`Failed to update role: ${res.status}`);
}
