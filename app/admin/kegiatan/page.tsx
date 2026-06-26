"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Plus, Pencil, Trash2, Eye, EyeOff } from "lucide-react";
import { getActivities, deleteActivity, updateActivity, type Activity } from "@/services/activities";

export default function AdminKegiatanPage() {
  const router = useRouter();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    getActivities(true)
      .then(setActivities)
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const handleDelete = async (id: number) => {
    if (!window.confirm("Yakin ingin menghapus kegiatan ini?")) return;
    try {
      await deleteActivity(id);
      setActivities((prev) => prev.filter((a) => a.id !== id));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Gagal menghapus");
    }
  };

  const handleTogglePublish = async (a: Activity) => {
    try {
      const updated = await updateActivity(a.id, { is_published: !a.is_published });
      setActivities((prev) => prev.map((x) => (x.id === a.id ? updated : x)));
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
          <h1 className="text-3xl font-bold text-foreground">Kelola Kegiatan</h1>
          <p className="text-sm text-foreground/50 mt-1">Atur program dan kegiatan Omah Gembira.</p>
        </div>
        <button
          onClick={() => router.push("/admin/kegiatan/tambah")}
          className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-charcoal hover:bg-charcoal/80 rounded-xl transition-colors"
        >
          <Plus className="w-4 h-4" /> Tambah Kegiatan
        </button>
      </div>

      {activities.length === 0 ? (
        <div className="bg-white rounded-2xl border border-foreground/5 p-12 text-center text-sm text-foreground/40">
          Belum ada kegiatan. Klik &quot;Tambah Kegiatan&quot; untuk memulai.
        </div>
      ) : (
        <div className="space-y-3">
          {activities.map((a) => (
            <div
              key={a.id}
              className={`flex items-center justify-between p-5 rounded-2xl border ${
                a.is_published ? "bg-white border-foreground/5" : "bg-foreground/5 border-foreground/10"
              }`}
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-green-bg text-green">
                  {a.title}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground">{a.title}</p>
                  <p className="text-sm text-foreground/40 truncate">{a.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0 ml-4">
                {!a.is_published && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gold-bg text-gold-dark font-medium">
                    Draft
                  </span>
                )}
                <button
                  onClick={() => handleTogglePublish(a)}
                  className="p-2 rounded-lg hover:bg-foreground/5 text-foreground/40 hover:text-foreground/70 transition-colors"
                  title={a.is_published ? "Sembunyikan" : "Publikasikan"}
                >
                  {a.is_published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => router.push(`/admin/kegiatan/edit/${a.id}`)}
                  className="p-2 rounded-lg hover:bg-green-bg text-foreground/40 hover:text-green transition-colors"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(a.id)}
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
