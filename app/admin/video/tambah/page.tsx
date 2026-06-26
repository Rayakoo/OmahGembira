"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import { createVideo } from "@/services/videos";

export default function TambahVideo() {
  const router = useRouter();
  const savingRef = useRef(false);

  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("umum");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (savingRef.current) return;
    if (!url.trim() || !title.trim()) {
      setError("URL dan judul video harus diisi.");
      return;
    }
    setError("");
    setSaving(true);
    savingRef.current = true;

    try {
      await createVideo({
        url: url.trim(),
        title: title.trim(),
        description: description.trim(),
        category,
      });
      router.push("/admin/video");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal menyimpan");
    } finally {
      setSaving(false);
      savingRef.current = false;
    }
  };

  function getVideoEmbedUrl(url: string): string {
    const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/);
    if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
    const driveMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (driveMatch) return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
    return url;
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => router.push("/admin/video")}
          className="p-2 rounded-lg hover:bg-foreground/5 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-foreground/60" />
        </button>
        <h1 className="text-2xl font-bold text-foreground">Tambah Video</h1>
      </div>

      <div className="max-w-xl space-y-6">
        <div className="bg-white rounded-2xl border border-foreground/5 p-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-foreground/70 mb-1">
              URL Video <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://youtube.com/watch?v=..."
              className="w-full px-4 py-3 bg-background rounded-xl border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-green/20 focus:border-green text-foreground"
            />
            <p className="text-xs text-foreground/30 mt-1">YouTube atau Google Drive.</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground/70 mb-1">
              Judul <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Kegiatan Outing Omah Gembira"
              className="w-full px-4 py-3 bg-background rounded-xl border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-green/20 focus:border-green text-foreground"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground/70 mb-1">Deskripsi</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Deskripsi singkat video..."
              rows={2}
              className="w-full px-4 py-3 bg-background rounded-xl border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-green/20 focus:border-green text-foreground resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground/70 mb-1">Kategori</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 bg-background rounded-xl border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-green/20 focus:border-green text-foreground"
            >
              <option value="umum">Umum</option>
              <option value="kegiatan">Kegiatan</option>
              <option value="pelatihan">Pelatihan</option>
              <option value="wawancara">Wawancara</option>
              <option value="workshop">Workshop</option>
            </select>
          </div>

          {url && (
            <div className="rounded-xl overflow-hidden bg-charcoal aspect-video">
              <iframe
                src={getVideoEmbedUrl(url)}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-600 font-medium">{error}</div>
        )}

        <div className="flex items-center gap-3">
          <button
            onClick={handleSubmit}
            disabled={saving}
            className="flex items-center gap-1.5 px-6 py-2.5 text-sm font-semibold text-white bg-charcoal hover:bg-charcoal/80 rounded-xl transition-colors disabled:opacity-50"
          >
            <Save className="w-4 h-4" /> {saving ? "Menyimpan..." : "Simpan"}
          </button>
          <button
            onClick={() => router.push("/admin/video")}
            className="px-6 py-2.5 text-sm font-semibold text-foreground/60 bg-white border border-foreground/10 rounded-xl hover:bg-foreground/5 transition-colors"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}
