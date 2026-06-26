"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Save, Plus, X, Star } from "lucide-react";
import { getActivities, updateActivity, type Activity } from "@/services/activities";
import type { KegiatanItem, MitraItem, DokumentasiItem } from "@/services/activities";

export default function EditKegiatan() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const savingRef = useRef(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [tujuan, setTujuan] = useState<string[]>([]);
  const [newTujuan, setNewTujuan] = useState("");

  const [kegiatan, setKegiatan] = useState<KegiatanItem[]>([]);
  const [kegNama, setKegNama] = useState("");
  const [kegGambar, setKegGambar] = useState("");

  const [mitra, setMitra] = useState<MitraItem[]>([]);
  const [mitNama, setMitNama] = useState("");
  const [mitGambar, setMitGambar] = useState("");

  const [dokumentasi, setDokumentasi] = useState<DokumentasiItem[]>([]);
  const [dokUrl, setDokUrl] = useState("");
  const [dokThumb, setDokThumb] = useState(false);

  const [isPublished, setIsPublished] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getActivities(true)
      .then((data) => {
        const a = data.find((x) => String(x.id) === id);
        if (!a) throw new Error("Not found");
        setTitle(a.title);
        setDescription(a.description);
        setTujuan(Array.isArray(a.tujuan) ? a.tujuan : []);
        setKegiatan(Array.isArray(a.kegiatan) ? a.kegiatan : []);
        setMitra(Array.isArray(a.mitra) ? a.mitra : []);
        setDokumentasi(Array.isArray(a.dokumentasi) ? a.dokumentasi : []);
        setIsPublished(a.is_published);
      })
      .catch(() => router.push("/admin/kegiatan"))
      .finally(() => setLoading(false));
  }, [id, router]);

  const addTujuan = () => {
    if (!newTujuan.trim()) return;
    setTujuan([...tujuan, newTujuan.trim()]);
    setNewTujuan("");
  };

  const addKegiatan = () => {
    if (!kegNama.trim()) return;
    setKegiatan([...kegiatan, { nama: kegNama.trim(), gambar: kegGambar.trim() }]);
    setKegNama("");
    setKegGambar("");
  };

  const addMitra = () => {
    if (!mitNama.trim()) return;
    setMitra([...mitra, { nama: mitNama.trim(), gambar: mitGambar.trim() }]);
    setMitNama("");
    setMitGambar("");
  };

  const addDokumentasi = () => {
    if (!dokUrl.trim()) return;
    setDokumentasi([...dokumentasi, { url: dokUrl.trim(), is_thumbnail: dokThumb }]);
    setDokUrl("");
    setDokThumb(false);
  };

  const toggleThumbnail = (idx: number) => {
    setDokumentasi((prev) =>
      prev.map((d, i) => ({
        ...d,
        is_thumbnail: i === idx ? !d.is_thumbnail : false,
      }))
    );
  };

  const handleSubmit = async () => {
    if (savingRef.current) return;
    if (!title.trim()) {
      setError("Judul kegiatan harus diisi.");
      return;
    }
    if (tujuan.length === 0) {
      setError("Minimal satu tujuan harus diisi.");
      return;
    }
    setError("");
    setSaving(true);
    savingRef.current = true;

    try {
      await updateActivity(Number(id), {
        title: title.trim(),
        description: description.trim(),
        tujuan,
        kegiatan,
        mitra,
        dokumentasi,
        is_published: isPublished,
      });
      router.push("/admin/kegiatan");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal menyimpan");
    } finally {
      setSaving(false);
      savingRef.current = false;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-green border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 bg-background rounded-xl border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-green/20 focus:border-green text-foreground";
  const inputSmClass = "w-full px-3 py-2 bg-background rounded-xl border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-green/20 focus:border-green text-foreground text-sm";

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => router.push("/admin/kegiatan")}
          className="p-2 rounded-lg hover:bg-foreground/5 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-foreground/60" />
        </button>
        <h1 className="text-2xl font-bold text-foreground">Edit Kegiatan</h1>
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
              placeholder="EDU.INC"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground/70 mb-1">Deskripsi</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Deskripsi program..."
              rows={3}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Tujuan */}
          <div>
            <label className="block text-sm font-semibold text-foreground/70 mb-1">
              Tujuan <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={newTujuan}
                onChange={(e) => setNewTujuan(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addTujuan(); } }}
                placeholder="Tambahkan tujuan..."
                className={`flex-1 ${inputSmClass}`}
              />
              <button
                type="button"
                onClick={addTujuan}
                className="px-3 py-2 bg-charcoal text-white rounded-xl hover:opacity-90 transition-opacity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            {tujuan.length > 0 && (
              <div className="space-y-1.5">
                {tujuan.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-foreground/5 rounded-lg text-sm text-foreground/70">
                    <span className="flex-1">{item}</span>
                    <button onClick={() => setTujuan(tujuan.filter((_, i) => i !== idx))} className="text-foreground/30 hover:text-red-500">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Kegiatan */}
          <div className="border-t border-foreground/5 pt-5">
            <label className="block text-sm font-semibold text-foreground/70 mb-1">Kegiatan</label>
            <p className="text-xs text-foreground/40 mb-2">Setiap kegiatan memiliki nama dan URL gambar (opsional).</p>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={kegNama}
                onChange={(e) => setKegNama(e.target.value)}
                placeholder="Nama kegiatan"
                className={`flex-1 ${inputSmClass}`}
              />
            </div>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={kegGambar}
                onChange={(e) => setKegGambar(e.target.value)}
                placeholder="URL gambar (Google Drive / lainnya)"
                className={`flex-1 ${inputSmClass}`}
              />
              <button
                type="button"
                onClick={addKegiatan}
                className="px-3 py-2 bg-charcoal text-white rounded-xl hover:opacity-90 transition-opacity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            {kegiatan.length > 0 && (
              <div className="space-y-1.5">
                {kegiatan.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-foreground/5 rounded-lg text-sm text-foreground/70">
                    <span className="flex-1">{item.nama}{item.gambar ? ` (ada gambar)` : ""}</span>
                    <button onClick={() => setKegiatan(kegiatan.filter((_, i) => i !== idx))} className="text-foreground/30 hover:text-red-500">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mitra */}
          <div className="border-t border-foreground/5 pt-5">
            <label className="block text-sm font-semibold text-foreground/70 mb-1">Kolaborasi & Mitra</label>
            <p className="text-xs text-foreground/40 mb-2">Setiap mitra memiliki nama dan URL gambar (opsional).</p>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={mitNama}
                onChange={(e) => setMitNama(e.target.value)}
                placeholder="Nama mitra"
                className={`flex-1 ${inputSmClass}`}
              />
            </div>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={mitGambar}
                onChange={(e) => setMitGambar(e.target.value)}
                placeholder="URL gambar (Google Drive / lainnya)"
                className={`flex-1 ${inputSmClass}`}
              />
              <button
                type="button"
                onClick={addMitra}
                className="px-3 py-2 bg-charcoal text-white rounded-xl hover:opacity-90 transition-opacity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            {mitra.length > 0 && (
              <div className="space-y-1.5">
                {mitra.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-foreground/5 rounded-lg text-sm text-foreground/70">
                    <span className="flex-1">{item.nama}{item.gambar ? ` (ada gambar)` : ""}</span>
                    <button onClick={() => setMitra(mitra.filter((_, i) => i !== idx))} className="text-foreground/30 hover:text-red-500">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Dokumentasi */}
          <div className="border-t border-foreground/5 pt-5">
            <label className="block text-sm font-semibold text-foreground/70 mb-1">Gambar Dokumentasi</label>
            <p className="text-xs text-foreground/40 mb-2">Salah satu gambar dapat dijadikan thumbnail. Klik bintang untuk memilih.</p>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={dokUrl}
                onChange={(e) => setDokUrl(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addDokumentasi(); } }}
                placeholder="URL gambar (Google Drive / lainnya)"
                className={`flex-1 ${inputSmClass}`}
              />
              <button
                type="button"
                onClick={addDokumentasi}
                className="px-3 py-2 bg-charcoal text-white rounded-xl hover:opacity-90 transition-opacity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            {dokumentasi.length > 0 && (
              <div className="space-y-1.5">
                {dokumentasi.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-foreground/5 rounded-lg text-sm text-foreground/70">
                    <button
                      onClick={() => toggleThumbnail(idx)}
                      title={item.is_thumbnail ? "Thumbnail" : "Jadikan thumbnail"}
                      className={item.is_thumbnail ? "text-gold-dark" : "text-foreground/20 hover:text-gold-dark"}
                    >
                      <Star className="w-3.5 h-3.5" fill={item.is_thumbnail ? "currentColor" : "none"} />
                    </button>
                    <span className="flex-1 truncate">{item.url}</span>
                    <button onClick={() => setDokumentasi(dokumentasi.filter((_, i) => i !== idx))} className="text-foreground/30 hover:text-red-500">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
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
            <Save className="w-4 h-4" /> {saving ? "Menyimpan..." : "Simpan Perubahan"}
          </button>
          <button
            onClick={() => router.push("/admin/kegiatan")}
            className="px-6 py-2.5 text-sm font-semibold text-foreground/60 bg-white border border-foreground/10 rounded-xl hover:bg-foreground/5 transition-colors"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}
