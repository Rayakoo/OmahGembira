"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { getVideos, deleteVideo, type Video } from "@/services/videos";

export default function AdminVideoPage() {
  const router = useRouter();
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    getVideos()
      .then(setVideos)
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const handleDelete = async (id: number) => {
    if (!window.confirm("Yakin ingin menghapus video ini?")) return;
    try {
      await deleteVideo(id);
      setVideos((prev) => prev.filter((v) => v.id !== id));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Gagal menghapus");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-green border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Kelola Video</h1>
          <p className="text-sm text-foreground/50 mt-1">Video dokumentasi kegiatan Omah Gembira.</p>
        </div>
        <button
          onClick={() => router.push("/admin/video/tambah")}
          className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-charcoal hover:bg-charcoal/80 rounded-xl transition-colors"
        >
          <Plus className="w-4 h-4" /> Tambah Video
        </button>
      </div>

      {videos.length === 0 ? (
        <div className="bg-white rounded-2xl border border-foreground/5 p-12 text-center text-sm text-foreground/40">
          Belum ada video.
        </div>
      ) : (
        <div className="space-y-3">
          {videos.map((v) => (
            <div
              key={v.id}
              className="flex items-center justify-between p-5 rounded-2xl bg-white border border-foreground/5"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-16 h-12 rounded-lg bg-charcoal flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground">{v.title}</p>
                  <p className="text-sm text-foreground/40 truncate">{v.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0 ml-4">
                <button
                  onClick={() => router.push(`/admin/video/edit/${v.id}`)}
                  className="p-2 rounded-lg hover:bg-green-bg text-foreground/40 hover:text-green transition-colors"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(v.id)}
                  className="p-2 rounded-lg hover:bg-red-bg text-foreground/40 hover:text-red transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
