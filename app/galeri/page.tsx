"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { getGalleries, type Gallery } from "@/services/galleries";

const cardColors = [
  "bg-green-bg border-green/20",
  "bg-blue-bg border-blue/20",
  "bg-gold-bg border-gold/20",
  "bg-rose-bg border-rose/20",
];

export default function GaleriPage() {
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [filter, setFilter] = useState("semua");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGalleries()
      .then(setGalleries)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const categories = ["Semua", "Kegiatan", "Kebersamaan", "Pelatihan", "Seni & Budaya"];

  const filtered = filter === "semua"
    ? galleries
    : galleries.filter((g) => g.category.replace("-", " ") === filter.toLowerCase());

  return (
    <>
      <section className="min-h-[40vh] flex items-center pt-16 bg-blue-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 text-blue text-sm font-medium mb-6">
              Galeri Foto
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Galeri Kegiatan
            </h1>
            <p className="text-lg text-foreground/60 mt-4 leading-relaxed">
              Dokumentasi momen-momen berharga dalam setiap kegiatan dan program Omah Gembira.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat.toLowerCase())}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat.toLowerCase()
                    ? "bg-charcoal text-white"
                    : "bg-muted text-foreground/60 hover:bg-green-bg hover:text-green"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-4 border-green border-t-transparent rounded-full animate-spin" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-foreground/40">
              Tidak ada foto di kategori ini.
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.slice(0, 12).map((g, i) => (
                <div
                  key={g.id}
                  className={`rounded-xl overflow-hidden border group cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02] ${
                    i === 0 ? "md:col-span-2 md:row-span-2" : ""
                  } ${i === 3 && filtered.length > 3 ? "md:col-span-2" : ""}`}
                >
                  {g.url ? (
                    <img
                      src={g.url}
                      alt={g.title || `Foto ${i + 1}`}
                      className="w-full h-full object-cover aspect-square"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                        const placeholder = (e.currentTarget as HTMLImageElement).parentElement?.querySelector(".img-placeholder");
                        if (placeholder) (placeholder as HTMLElement).style.display = "flex";
                      }}
                    />
                  ) : null}
                  <div
                    className={`img-placeholder w-full aspect-square ${cardColors[i % 4]} flex items-center justify-center ${g.url ? "hidden" : ""}`}
                  >
                    <div className="text-center p-4">
                      <svg className="w-10 h-10 mx-auto mb-2 text-foreground/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-foreground/30 text-xs">{g.title || `Foto ${i + 1}`}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-green-bg text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Ingin foto atau videonya?
          </h2>
          <p className="text-foreground/60 max-w-lg mx-auto mb-8">
            Kunjungi media sosial kami untuk melihat lebih banyak dokumentasi kegiatan.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://instagram.com/omahgembira" target="_blank" className="px-6 py-3 rounded-full bg-charcoal text-white font-semibold hover:opacity-90 transition-all">
              Instagram @omahgembira
            </a>
            <Link
              href="/video"
              className="px-6 py-3 rounded-full border-2 border-foreground/20 text-foreground font-semibold hover:border-foreground/40 transition-all"
            >
              Lihat Video
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
