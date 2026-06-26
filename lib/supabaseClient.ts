import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let _client: SupabaseClient | null = null;

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function getSupabase(): SupabaseClient {
  if (!_client) {
    if (!supabaseUrl || !supabaseAnonKey)
      throw new Error("Supabase env vars not set");
    _client = createClient(supabaseUrl, supabaseAnonKey, {
      auth: { autoRefreshToken: false, persistSession: false, detectSessionInUrl: false },
    });
  }
  return _client;
}

function getStorageKey() {
  const projectId = supabaseUrl?.match(/\/\/([^.]+)/)?.[1] ?? "local";
  return `sb-${projectId}-auth-token`;
}

export function hasSession(): boolean {
  const key = getStorageKey();
  const raw = localStorage.getItem(key);
  if (!raw) return false;
  try {
    const session = JSON.parse(raw);
    return !!(session?.access_token);
  } catch {
    return false;
  }
}
