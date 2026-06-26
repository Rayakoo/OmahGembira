"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import { createMaterial } from "@/services/materials";

function getEmbedUrl(type: "video" | "pdf", url: string): string {
  if (type === "video") {
    const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/);
    if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
    const driveMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (driveMatch) return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
    return url;
  }
  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (driveMatch) return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
  return url;
}

export default function TambahMateri() {
  const router = useRouter();
  const savingRef = useRef(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState<"video" | "pdf">("video");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("umum");
  const [isPublished, setIsPublished] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (savingRef.current) return;
    if (!title.trim() || !url.trim()) {
      setError("Judul dan URL harus diisi.");
      return;
    }
    setError("");
    setSaving(true);
    savingRef.current = true;

    try {
      await createMaterial({
        title: title.trim(),
        description: description.trim(),
        type,
        url: url.trim(),
        category,
        is_published: isPublished,
      });
      router.push("/admin/materi");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal menyimpan");
    } finally {
      setSaving(false);
      savingRef.current = false;
    }
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => router.push("/admin/materi")}
          className="p-2 rounded-lg hover:bg-foreground/5 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-foreground/60" />
        </button>
        <h1 className="text-2xl font-bold text-foreground">Tambah Materi</h1>
      </div>

      <div className="max-w-2xl space-y-6">
        <div className="bg-white rounded-2xl border border-foreground/5 p-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-foreground/70 mb-1">
              Judul <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Belajar Bahasa Isyarat Dasar"
              className="w-full px-4 py-3 bg-background rounded-xl border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-green/20 focus:border-green text-foreground"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground/70 mb-1">Deskripsi</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Deskripsi singkat materi..."
              rows={2}
              className="w-full px-4 py-3 bg-background rounded-xl border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-green/20 focus:border-green text-foreground resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground/70 mb-2">Tipe Materi</label>
            <div className="flex gap-2">
              {(["video", "pdf"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all uppercase ${
                    type === t
                      ? "bg-charcoal text-white"
                      : "bg-foreground/5 text-foreground/50 hover:bg-foreground/10"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground/70 mb-1">
              URL <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={type === "video" ? "https://youtube.com/watch?v=... atau link Google Drive" : "https://drive.google.com/file/d/..."}
              className="w-full px-4 py-3 bg-background rounded-xl border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-green/20 focus:border-green text-foreground"
            />
            <p className="text-xs text-foreground/30 mt-1">
              {type === "pdf" ? "Gunakan link Google Drive PDF." : "Gunakan link YouTube atau Google Drive video."}
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground/70 mb-1">Kategori</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 bg-background rounded-xl border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-green/20 focus:border-green text-foreground"
            >
              <option value="umum">Umum</option>
              <option value="edukasi">Edukasi</option>
              <option value="pelatihan">Pelatihan</option>
              <option value="keterampilan">Keterampilan</option>
            </select>
          </div>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={isPublished}
              onChange={(e) => setIsPublished(e.target.checked)}
              className="w-4 h-4 rounded accent-green"
            />
            <span className="text-sm font-medium text-foreground/70">Publikasikan</span>
          </label>

          {url && (
            <div className="rounded-xl overflow-hidden bg-charcoal aspect-video">
              {type === "video" ? (
                <iframe
                  src={getEmbedUrl(type, url)}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white flex flex-col items-center gap-2 transition-colors"
                  >
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">Preview PDF</span>
                  </a>
                </div>
              )}
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
            onClick={() => router.push("/admin/materi")}
            className="px-6 py-2.5 text-sm font-semibold text-foreground/60 bg-white border border-foreground/10 rounded-xl hover:bg-foreground/5 transition-colors"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}
