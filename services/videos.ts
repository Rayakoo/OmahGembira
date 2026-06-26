import { getAccessToken, getValidToken } from "@/services/auth";
import { getCached, setCache } from "@/lib/cache";

export type Video = { id: number; url: string; title: string; description: string; category: string; created_at: string };

const CACHE_KEY = "videos";

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

export async function getVideos() {
  const cached = getCached<Video[]>(CACHE_KEY);
  if (cached) return cached;
  const data = await supabaseGet<Video[]>("/rest/v1/videos?select=*&order=created_at.desc");
  setCache(CACHE_KEY, data);
  return data;
}

export async function createVideo(input: { url: string; title: string; description?: string; category?: string }) {
  const { url, anonKey } = getConfig();
  const token = await getValidToken().catch(() => getAccessToken());
  const res = await fetch(`${url}/rest/v1/videos`, {
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
  setCache(CACHE_KEY, null as unknown as Video[]);
  const data: Video[] = await res.json();
  return data[0];
}

export async function updateVideo(id: number, input: Partial<{ url: string; title: string; description: string; category: string }>) {
  const { url, anonKey } = getConfig();
  const token = await getValidToken().catch(() => getAccessToken());
  const res = await fetch(`${url}/rest/v1/videos?id=eq.${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      apikey: anonKey,
      Authorization: `Bearer ${token}`,
      Prefer: "return=representation",
    },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error(`Update failed: ${res.status}`);
  setCache(CACHE_KEY, null as unknown as Video[]);
  const data: Video[] = await res.json();
  return data[0];
}

export async function deleteVideo(id: number) {
  const { url, anonKey } = getConfig();
  const token = await getValidToken().catch(() => getAccessToken());
  const res = await fetch(`${url}/rest/v1/videos?id=eq.${id}`, {
    method: "DELETE",
    headers: { apikey: anonKey, Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Delete failed: ${res.status}`);
  setCache(CACHE_KEY, null as unknown as Video[]);
}
