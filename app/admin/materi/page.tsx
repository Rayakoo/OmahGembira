"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Plus, Pencil, Trash2, Eye, EyeOff } from "lucide-react";
import { getMaterials, deleteMaterial, updateMaterial, type Material } from "@/services/materials";

export default function AdminMateriPage() {
  const router = useRouter();
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    getMaterials(true)
      .then(setMaterials)
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const handleDelete = async (id: number) => {
    if (!window.confirm("Yakin ingin menghapus materi ini?")) return;
    try {
      await deleteMaterial(id);
      setMaterials((prev) => prev.filter((m) => m.id !== id));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Gagal menghapus");
    }
  };

  const handleTogglePublish = async (m: Material) => {
    try {
      const updated = await updateMaterial(m.id, { is_published: !m.is_published });
      setMaterials((prev) => prev.map((x) => (x.id === m.id ? updated : x)));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Gagal update");
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
          <h1 className="text-3xl font-bold text-foreground">Kelola Materi</h1>
          <p className="text-sm text-foreground/50 mt-1">Atur materi pembelajaran (video & PDF).</p>
        </div>
        <button
          onClick={() => router.push("/admin/materi/tambah")}
          className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-charcoal hover:bg-charcoal/80 rounded-xl transition-colors"
        >
          <Plus className="w-4 h-4" /> Tambah Materi
        </button>
      </div>

      {materials.length === 0 ? (
        <div className="bg-white rounded-2xl border border-foreground/5 p-12 text-center text-sm text-foreground/40">
          Belum ada materi. Klik &quot;Tambah Materi&quot; untuk memulai.
        </div>
      ) : (
        <div className="space-y-3">
          {materials.map((m) => (
            <div
              key={m.id}
              className={`flex items-center justify-between p-5 rounded-2xl border ${
                m.is_published ? "bg-white border-foreground/5" : "bg-foreground/5 border-foreground/10"
              }`}
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                  m.type === "video" ? "bg-rose-bg" : "bg-blue-bg"
                }`}>
                  {m.type === "video" ? (
                    <svg className="w-5 h-5 text-rose-dark" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-foreground">{m.title}</p>
                    <span className="text-xs px-1.5 py-0.5 rounded bg-foreground/5 text-foreground/40 font-medium uppercase">
                      {m.type}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/40 truncate">{m.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0 ml-4">
                {!m.is_published && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gold-bg text-gold-dark font-medium">Draft</span>
                )}
                <button
                  onClick={() => handleTogglePublish(m)}
                  className="p-2 rounded-lg hover:bg-foreground/5 text-foreground/40 hover:text-foreground/70 transition-colors"
                  title={m.is_published ? "Sembunyikan" : "Publikasikan"}
                >
                  {m.is_published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => router.push(`/admin/materi/edit/${m.id}`)}
                  className="p-2 rounded-lg hover:bg-green-bg text-foreground/40 hover:text-green transition-colors"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(m.id)}
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
