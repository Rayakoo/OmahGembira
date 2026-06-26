"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { getMaterials, type Material } from "@/services/materials";

function getEmbedUrl(material: Material): string {
  const { url, type } = material;
  if (type === "video") {
    const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/);
    if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=0`;
    const driveMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (driveMatch) return `https://drive.google.com/file/d/${driveMatch[1]}/preview?autoplay=0`;
    return url;
  }
  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (driveMatch) return `https://drive.google.com/file/d/${driveMatch[1]}/preview?autoplay=0`;
  return url;
}

const cardColors = [
  "bg-green-bg border-green/20",
  "bg-blue-bg border-blue/20",
  "bg-gold-bg border-gold/20",
  "bg-rose-bg border-rose/20",
];

export default function MateriPage() {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [filter, setFilter] = useState("semua");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMaterials()
      .then(setMaterials)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const categories = ["Semua", "umum", "edukasi", "pelatihan", "keterampilan"];

  const filtered =
    filter === "semua"
      ? materials
      : materials.filter((m) => m.category === filter);

  return (
    <>
      <section className="min-h-[40vh] flex items-center pt-16 bg-blue-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 text-blue text-sm font-medium mb-6">
              Materi
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Materi Pembelajaran
            </h1>
            <p className="text-lg text-foreground/60 mt-4 leading-relaxed">
              Kumpulan materi edukasi dalam bentuk video dan PDF untuk mendukung
              pembelajaran inklusif.
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
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                  filter === cat
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
              Tidak ada materi di kategori ini.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((m, i) => {
                const colorClasses = `rounded-2xl border ${cardColors[i % 4]} bg-white overflow-hidden group card-hover`;
                const content = (
                  <>
                    <div className="aspect-video bg-charcoal relative">
                      {m.type === "video" ? (
                        <iframe
                          src={getEmbedUrl(m)}
                          className="w-full h-full"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <iframe
                          src={getEmbedUrl(m)}
                          className="w-full h-full pointer-events-none"
                          title={m.title}
                          loading="lazy"
                        />
                      )}
                      <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-black/50 text-white text-xs font-medium capitalize">
                        {m.type === "video" ? (
                          <svg className="w-3.5 h-3.5 inline mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        ) : (
                          <svg className="w-3.5 h-3.5 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        )}
                        {m.type === "video" ? "Video" : "PDF"}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-foreground group-hover:text-green transition-colors">
                        {m.title}
                      </h3>
                      {m.description && (
                        <p className="text-sm text-foreground/50 mt-1 line-clamp-2">{m.description}</p>
                      )}
                    </div>
                  </>
                );

                return (
                  <AnimatedSection key={m.id} delay={i * 50}>
                    {m.type === "video" ? (
                      <div className={colorClasses}>{content}</div>
                    ) : (
                      <a
                        href={m.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block ${colorClasses}`}
                      >
                        {content}
                      </a>
                    )}
                  </AnimatedSection>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-green-bg text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Punya Materi untuk Dibagikan?
          </h2>
          <p className="text-foreground/60 max-w-lg mx-auto mb-8">
            Jika Anda memiliki materi edukasi yang bermanfaat, hubungi kami untuk
            berkolaborasi.
          </p>
          <Link
            href="/kontak"
            className="inline-flex px-6 py-3 rounded-full bg-charcoal text-white font-semibold hover:opacity-90 transition-all"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>
    </>
  );
}
