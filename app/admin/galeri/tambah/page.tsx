"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import { createGallery } from "@/services/galleries";

export default function TambahGaleri() {
  const router = useRouter();
  const savingRef = useRef(false);

  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("umum");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (savingRef.current) return;
    if (!url.trim()) {
      setError("URL gambar harus diisi.");
      return;
    }
    setError("");
    setSaving(true);
    savingRef.current = true;

    try {
      await createGallery({ url: url.trim(), title: title.trim(), category });
      router.push("/admin/galeri");
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
          onClick={() => router.push("/admin/galeri")}
          className="p-2 rounded-lg hover:bg-foreground/5 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-foreground/60" />
        </button>
        <h1 className="text-2xl font-bold text-foreground">Tambah Foto</h1>
      </div>

      <div className="max-w-xl space-y-6">
        <div className="bg-white rounded-2xl border border-foreground/5 p-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-foreground/70 mb-1">
              URL Gambar <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/gambar.jpg"
              className="w-full px-4 py-3 bg-background rounded-xl border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-green/20 focus:border-green text-foreground"
            />
            <p className="text-xs text-foreground/30 mt-1">Gunakan URL gambar langsung.</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground/70 mb-1">Judul Foto</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Kegiatan Outing"
              className="w-full px-4 py-3 bg-background rounded-xl border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-green/20 focus:border-green text-foreground"
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
              <option value="kebersamaan">Kebersamaan</option>
              <option value="pelatihan">Pelatihan</option>
              <option value="seni-budaya">Seni & Budaya</option>
            </select>
          </div>

          {url && (
            <div className="rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <img
                src={url}
                alt="Preview"
                className="w-full h-48 object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
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
            onClick={() => router.push("/admin/galeri")}
            className="px-6 py-2.5 text-sm font-semibold text-foreground/60 bg-white border border-foreground/10 rounded-xl hover:bg-foreground/5 transition-colors"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}
