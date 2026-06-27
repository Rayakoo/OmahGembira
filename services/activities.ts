import { getAccessToken, getValidToken } from "@/services/auth";
import { getCached, setCache } from "@/lib/cache";

export type TujuanItem = string;

export type KegiatanItem = {
  nama: string;
  gambar: string;
};

export type MitraItem = {
  nama: string;
  gambar: string;
};

export type DokumentasiItem = {
  url: string;
  is_thumbnail: boolean;
};

export type Activity = {
  id: number;
  title: string;
  description: string;
  tujuan: TujuanItem[];
  kegiatan: KegiatanItem[];
  mitra: MitraItem[];
  dokumentasi: DokumentasiItem[];
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

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

export async function getActivities(includeUnpublished = false) {
  if (includeUnpublished) {
    return supabaseGet<Activity[]>("/rest/v1/activities?select=*&order=created_at.asc");
  }
  return supabaseGet<Activity[]>("/rest/v1/activities?select=*&is_published=eq.true&order=created_at.asc");
}

export async function getActivityById(id: number) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) throw new Error("Supabase env vars not set");
  const res = await fetch(`${url}/rest/v1/activities?id=eq.${id}&select=*`, {
    headers: { apikey: anonKey, Authorization: `Bearer ${anonKey}` },
  });
  if (!res.ok) throw new Error(`GET failed: ${res.status}`);
  const data: Activity[] = await res.json();
  return data[0] || null;
}

export async function createActivity(input: {
  title: string;
  description?: string;
  tujuan?: TujuanItem[];
  kegiatan?: KegiatanItem[];
  mitra?: MitraItem[];
  dokumentasi?: DokumentasiItem[];
  is_published?: boolean;
}) {
  const { url, anonKey } = getConfig();
  const token = await getValidToken().catch(() => getAccessToken());
  const res = await fetch(`${url}/rest/v1/activities`, {
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
  const data: Activity[] = await res.json();
  return data[0];
}

export async function updateActivity(
  id: number,
  input: Partial<{
    title: string;
    description: string;
    tujuan: TujuanItem[];
    kegiatan: KegiatanItem[];
    mitra: MitraItem[];
    dokumentasi: DokumentasiItem[];
    is_published: boolean;
  }>
) {
  const { url, anonKey } = getConfig();
  const token = await getValidToken().catch(() => getAccessToken());
  const res = await fetch(`${url}/rest/v1/activities?id=eq.${id}`, {
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
  const data: Activity[] = await res.json();
  return data[0];
}

export async function deleteActivity(id: number) {
  const { url, anonKey } = getConfig();
  const token = await getValidToken().catch(() => getAccessToken());
  const res = await fetch(`${url}/rest/v1/activities?id=eq.${id}`, {
    method: "DELETE",
    headers: { apikey: anonKey, Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Delete failed: ${res.status}`);
}
