import { getAccessToken, getValidToken } from "@/services/auth";
import { getCached, setCache } from "@/lib/cache";

export type Gallery = { id: number; url: string; title: string; category: string; created_at: string };

const CACHE_KEY = "galleries";

function getConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) throw new Error("Supabase env vars not set");
  return { url, anonKey };
}

async function supabaseGet<T>(path: string): Promise<T> {
  const { url, anonKey } = getConfig();
  const res = await fetch(`${url}${path}`, {
    headers: { apikey: anonKey, Authorization: `Bearer ${anonKey}` },
  });
  if (!res.ok) throw new Error(`GET failed: ${res.status}`);
  return res.json();
}

export async function getGalleries() {
  const cached = getCached<Gallery[]>(CACHE_KEY);
  if (cached) return cached;
  const data = await supabaseGet<Gallery[]>("/rest/v1/galleries?select=*&order=created_at.desc");
  setCache(CACHE_KEY, data);
  return data;
}

export async function createGallery(input: { url: string; title?: string; category?: string }) {
  const { url, anonKey } = getConfig();
  const token = await getValidToken().catch(() => getAccessToken());
  const res = await fetch(`${url}/rest/v1/galleries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: anonKey,
      Authorization: `Bearer ${token}`,
      Prefer: "return=representation",
    },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error(`Insert failed: ${res.status}`);
  setCache(CACHE_KEY, null as unknown as Gallery[]);
  const data: Gallery[] = await res.json();
  return data[0];
}

export async function deleteGallery(id: number) {
  const { url, anonKey } = getConfig();
  const token = await getValidToken().catch(() => getAccessToken());
  const res = await fetch(`${url}/rest/v1/galleries?id=eq.${id}`, {
    method: "DELETE",
    headers: { apikey: anonKey, Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Delete failed: ${res.status}`);
  setCache(CACHE_KEY, null as unknown as Gallery[]);
}
