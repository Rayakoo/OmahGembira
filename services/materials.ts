import { getAccessToken, getValidToken } from "@/services/auth";
import { getCached, setCache } from "@/lib/cache";

export type Material = {
  id: number;
  title: string;
  description: string;
  type: "video" | "pdf";
  url: string;
  category: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

const CACHE_KEY_PUBLIC = "materials_public";
const CACHE_KEY_ALL = "materials_all";

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

export async function getMaterials(includeUnpublished = false) {
  const cacheKey = includeUnpublished ? CACHE_KEY_ALL : CACHE_KEY_PUBLIC;
  const cached = getCached<Material[]>(cacheKey);
  if (cached) return cached;
  const path = includeUnpublished
    ? "/rest/v1/materials?select=*&order=created_at.desc"
    : "/rest/v1/materials?select=*&is_published=eq.true&order=created_at.desc";
  const data = await supabaseGet<Material[]>(path);
  setCache(cacheKey, data);
  return data;
}

export async function createMaterial(input: {
  title: string;
  description?: string;
  type: "video" | "pdf";
  url: string;
  category?: string;
  is_published?: boolean;
}) {
  const { url, anonKey } = getConfig();
  const token = await getValidToken().catch(() => getAccessToken());
  const res = await fetch(`${url}/rest/v1/materials`, {
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
  setCache(CACHE_KEY_PUBLIC, null as unknown as Material[]);
  setCache(CACHE_KEY_ALL, null as unknown as Material[]);
  const data: Material[] = await res.json();
  return data[0];
}

export async function updateMaterial(
  id: number,
  input: Partial<{
    title: string;
    description: string;
    type: "video" | "pdf";
    url: string;
    category: string;
    is_published: boolean;
  }>
) {
  const { url, anonKey } = getConfig();
  const token = await getValidToken().catch(() => getAccessToken());
  const res = await fetch(`${url}/rest/v1/materials?id=eq.${id}`, {
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
  setCache(CACHE_KEY_PUBLIC, null as unknown as Material[]);
  setCache(CACHE_KEY_ALL, null as unknown as Material[]);
  const data: Material[] = await res.json();
  return data[0];
}

export async function deleteMaterial(id: number) {
  const { url, anonKey } = getConfig();
  const token = await getValidToken().catch(() => getAccessToken());
  const res = await fetch(`${url}/rest/v1/materials?id=eq.${id}`, {
    method: "DELETE",
    headers: { apikey: anonKey, Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Delete failed: ${res.status}`);
}
