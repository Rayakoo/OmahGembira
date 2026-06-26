"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2 } from "lucide-react";
import { getGalleries, deleteGallery, type Gallery } from "@/services/galleries";
import { toDirectImageUrl } from "@/lib/toDirectImageUrl";

export default function AdminGaleriPage() {
  const router = useRouter();
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    getGalleries()
      .then(setGalleries)
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const handleDelete = async (id: number) => {
    if (!window.confirm("Yakin ingin menghapus gambar ini?")) return;
    try {
      await deleteGallery(id);
      setGalleries((prev) => prev.filter((g) => g.id !== id));
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
          <h1 className="text-3xl font-bold text-foreground">Kelola Galeri</h1>
          <p className="text-sm text-foreground/50 mt-1">Foto-foto dokumentasi kegiatan Omah Gembira.</p>
        </div>
        <button
          onClick={() => router.push("/admin/galeri/tambah")}
          className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-charcoal hover:bg-charcoal/80 rounded-xl transition-colors"
        >
          <Plus className="w-4 h-4" /> Tambah Foto
        </button>
      </div>

      {galleries.length === 0 ? (
        <div className="bg-white rounded-2xl border border-foreground/5 p-12 text-center text-sm text-foreground/40">
          Belum ada foto di galeri.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleries.map((g) => (
            <div
              key={g.id}
              className="group relative bg-white rounded-2xl border border-foreground/5 overflow-hidden shadow-sm aspect-[4/3]"
            >
              <img
                src={toDirectImageUrl(g.url)}
                alt={g.title || "Galeri"}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button
                  onClick={() => handleDelete(g.id)}
                  className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  title="Hapus"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute inset-0 pointer-events-none">
                {!g.url || g.url === "" ? (
                  <div className="w-full h-full bg-blue-bg flex items-center justify-center border border-blue/20">
                    <svg className="w-10 h-10 text-foreground/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
