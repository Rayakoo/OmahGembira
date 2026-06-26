"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, Image, Play, Calendar } from "lucide-react";
import { getGalleries, type Gallery } from "@/services/galleries";
import { getVideos, type Video } from "@/services/videos";
import { getActivities, type Activity } from "@/services/activities";
import { getMaterials, type Material } from "@/services/materials";

export default function AdminDashboard() {
  const router = useRouter();
  const [galleryCount, setGalleryCount] = useState(0);
  const [videoCount, setVideoCount] = useState(0);
  const [activityCount, setActivityCount] = useState(0);
  const [materialCount, setMaterialCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      getGalleries().catch(() => [] as Gallery[]),
      getVideos().catch(() => [] as Video[]),
      getActivities(true).catch(() => [] as Activity[]),
      getMaterials(true).catch(() => [] as Material[]),
    ]).then(([g, v, a, m]) => {
      setGalleryCount(g.length);
      setVideoCount(v.length);
      setActivityCount(a.length);
      setMaterialCount(m.length);
    }).finally(() => setLoading(false));
  }, []);

  const stats = [
    { label: "Total Kegiatan", value: activityCount, icon: Calendar, color: "text-green", bg: "bg-green-bg" },
    { label: "Total Materi", value: materialCount, icon: BookOpen, color: "text-blue", bg: "bg-blue-bg" },
    { label: "Total Galeri", value: galleryCount, icon: Image, color: "text-gold-dark", bg: "bg-gold-bg" },
    { label: "Total Video", value: videoCount, icon: Play, color: "text-rose-dark", bg: "bg-rose-bg" },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-green border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
      <p className="text-foreground/50 mb-8">Ringkasan konten website Omah Gembira.</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        {stats.map((s) => (
          <div key={s.label} className="p-5 rounded-2xl bg-white border border-foreground/5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center`}>
                <s.icon className={`w-5 h-5 ${s.color}`} />
              </div>
              <div>
                <p className="text-xs text-foreground/50">{s.label}</p>
                <p className="text-xl font-bold text-foreground">{s.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <button
          onClick={() => router.push("/admin/kegiatan")}
          className="p-6 rounded-2xl bg-green-bg border border-green/10 text-left hover:shadow-md transition-all group"
        >
          <Calendar className="w-8 h-8 text-green mb-3" />
          <h3 className="font-bold text-foreground text-lg">Kelola Kegiatan</h3>
          <p className="text-sm text-foreground/50 mt-1">Tambah, edit, atau hapus program kegiatan.</p>
          <span className="inline-block mt-3 text-sm font-semibold text-green group-hover:translate-x-1 transition-transform">
            Kelola &rarr;
          </span>
        </button>

        <button
          onClick={() => router.push("/admin/materi")}
          className="p-6 rounded-2xl bg-blue-bg border border-blue/10 text-left hover:shadow-md transition-all group"
        >
          <BookOpen className="w-8 h-8 text-blue mb-3" />
          <h3 className="font-bold text-foreground text-lg">Kelola Materi</h3>
          <p className="text-sm text-foreground/50 mt-1">Tambah, edit, atau hapus materi pembelajaran.</p>
          <span className="inline-block mt-3 text-sm font-semibold text-blue group-hover:translate-x-1 transition-transform">
            Kelola &rarr;
          </span>
        </button>

        <button
          onClick={() => router.push("/admin/galeri")}
          className="p-6 rounded-2xl bg-gold-bg border border-gold/10 text-left hover:shadow-md transition-all group"
        >
          <Image className="w-8 h-8 text-gold-dark mb-3" />
          <h3 className="font-bold text-foreground text-lg">Kelola Galeri</h3>
          <p className="text-sm text-foreground/50 mt-1">Upload dan hapus foto galeri kegiatan.</p>
          <span className="inline-block mt-3 text-sm font-semibold text-gold-dark group-hover:translate-x-1 transition-transform">
            Kelola &rarr;
          </span>
        </button>

        <button
          onClick={() => router.push("/admin/video")}
          className="p-6 rounded-2xl bg-rose-bg border border-rose/10 text-left hover:shadow-md transition-all group"
        >
          <Play className="w-8 h-8 text-rose-dark mb-3" />
          <h3 className="font-bold text-foreground text-lg">Kelola Video</h3>
          <p className="text-sm text-foreground/50 mt-1">Tambah, edit, atau hapus video dokumentasi.</p>
          <span className="inline-block mt-3 text-sm font-semibold text-rose-dark group-hover:translate-x-1 transition-transform">
            Kelola &rarr;
          </span>
        </button>
      </div>
    </div>
  );
}
