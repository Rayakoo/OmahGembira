"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { getActivities, type Activity } from "@/services/activities";

function getDriveThumbnail(url: string): string {
  const match = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match) return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w800`;
  return url;
}

function getGoogleDriveImageUrl(url: string): string {
  const match = url.match(/\/d\/([^/]+)/);
  if (match) return `https://lh3.googleusercontent.com/d/${match[1]}`;
  return url;
}

const cardSchemes = [
  {
    bg: "bg-green-bg",
    border: "border-green/20",
    text: "text-green",
    dot: "bg-green",
    checkBg: "bg-green-bg",
    checkText: "text-green",
  },
  {
    bg: "bg-blue-bg",
    border: "border-blue/20",
    text: "text-blue",
    dot: "bg-blue",
    checkBg: "bg-blue-bg",
    checkText: "text-blue",
  },
  {
    bg: "bg-gold-bg",
    border: "border-gold/20",
    text: "text-gold-dark",
    dot: "bg-gold",
    checkBg: "bg-gold-bg",
    checkText: "text-gold-dark",
  },
  {
    bg: "bg-rose-bg",
    border: "border-rose/20",
    text: "text-rose-dark",
    dot: "bg-rose",
    checkBg: "bg-rose-bg",
    checkText: "text-rose-dark",
  },
];

const regulations = [
  "UU No. 8 Tahun 2016 tentang Penyandang Disabilitas",
  "Peraturan Pemerintah terkait disabilitas",
  "Peraturan Daerah Malang Raya",
];

export default function KegiatanPage() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Activity | null>(null);

  useEffect(() => {
    getActivities()
      .then(setActivities)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <>
      <section className="min-h-[40vh] flex items-center pt-16 bg-green-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 text-green text-sm font-medium mb-6">
              Program & Kegiatan
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Program Berkelanjutan
            </h1>
            <p className="text-lg text-foreground/60 mt-4 leading-relaxed">
              Program unggulan yang berjalan secara berkelanjutan, diatur oleh UU No. 8/2016, PP, dan Perda terkait.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-4 border-green border-t-transparent rounded-full animate-spin" />
            </div>
          ) : activities.length === 0 ? (
            <div className="text-center py-20 text-foreground/40">
              Belum ada program kegiatan.
            </div>
          ) : (
            <div className="space-y-8">
              {activities.map((activity, idx) => {
                const scheme = cardSchemes[idx % cardSchemes.length];
                const tujuanList = Array.isArray(activity.tujuan) ? activity.tujuan : [];
                const dokList = Array.isArray(activity.dokumentasi) ? activity.dokumentasi : [];
                const thumbnail = dokList.find((d) => d.is_thumbnail)?.url || dokList[0]?.url || "";

                return (
                  <AnimatedSection key={activity.id} delay={idx * 100}>
                    <div className={`rounded-2xl ${scheme.bg} border ${scheme.border} overflow-hidden card-hover`}>
                      <div className="grid lg:grid-cols-2 gap-0">
                        <div className={`p-8 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                          <h2 className={`text-2xl font-bold ${scheme.text} mb-3`}>
                            {activity.title}
                          </h2>
                          <p className="text-foreground/60 leading-relaxed mb-6">{activity.description}</p>

                          {tujuanList.length > 0 && (
                            <div className="mb-6">
                              <h3 className="text-sm font-bold text-foreground/40 uppercase tracking-wider mb-3">Tujuan</h3>
                              <ul className="space-y-2">
                                {tujuanList.slice(0, 4).map((item) => (
                                  <li key={item} className="flex items-start gap-3">
                                    <div className={`w-5 h-5 rounded-full ${scheme.checkBg} flex items-center justify-center shrink-0 mt-0.5`}>
                                      <svg className={`w-3 h-3 ${scheme.checkText}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                      </svg>
                                    </div>
                                    <span className="text-sm text-foreground/70">{item}</span>
                                  </li>
                                ))}
                              </ul>
                              <button
                                onClick={() => setSelected(activity)}
                                className={`mt-3 text-xs font-semibold ${scheme.text} hover:underline`}
                              >
                                Lihat selengkapnya &rarr;
                              </button>
                            </div>
                          )}
                        </div>

                        <div className={`bg-charcoal min-h-[280px] relative ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                          {thumbnail ? (
                            <img
                              src={getDriveThumbnail(thumbnail)}
                              alt={activity.title}
                              className="w-full h-full object-cover absolute inset-0"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center absolute inset-0">
                              <div className="text-center p-8">
                                <p className="text-white/30 text-sm">Belum ada gambar</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />
          <div className="relative min-h-full flex items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl w-full max-w-3xl shadow-2xl animate-fade-in-up my-8">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
              >
                <X className="w-5 h-5 text-foreground/60" />
              </button>

              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-3">{selected.title}</h2>
                <p className="text-foreground/60 leading-relaxed mb-8">{selected.description}</p>

                {Array.isArray(selected.tujuan) && selected.tujuan.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-foreground/40 uppercase tracking-wider mb-4">Tujuan</h3>
                    <div className="space-y-2">
                      {selected.tujuan.map((item) => (
                        <div key={item} className="flex items-start gap-3 p-3 rounded-xl bg-green-bg">
                          <div className="w-5 h-5 rounded-full bg-green flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm text-foreground/70">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {Array.isArray(selected.kegiatan) && selected.kegiatan.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-foreground/40 uppercase tracking-wider mb-4">Kegiatan</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {selected.kegiatan.map((item) => (
                        <div key={item.nama} className="p-3 rounded-xl bg-blue-bg flex items-center gap-3">
                          {item.gambar && (
                            <img
                              src={getGoogleDriveImageUrl(item.gambar)}
                              alt={item.nama}
                              className="w-10 h-10 rounded-lg object-cover shrink-0"
                              loading="lazy"
                            />
                          )}
                          <span className="text-sm font-medium text-foreground/70">{item.nama}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {Array.isArray(selected.mitra) && selected.mitra.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-foreground/40 uppercase tracking-wider mb-4">Kolaborasi & Mitra</h3>
                    <div className="flex flex-wrap gap-3">
                      {selected.mitra.map((item) => (
                        <div key={item.nama} className="flex items-center gap-3 p-3 rounded-xl bg-gold-bg">
                          {item.gambar && (
                            <img
                              src={getGoogleDriveImageUrl(item.gambar)}
                              alt={item.nama}
                              className="w-10 h-10 rounded-lg object-cover shrink-0"
                              loading="lazy"
                            />
                          )}
                          <span className="text-sm font-medium text-foreground/70">{item.nama}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {Array.isArray(selected.dokumentasi) && selected.dokumentasi.length > 0 && (
                  <div>
                    <h3 className="text-sm font-bold text-foreground/40 uppercase tracking-wider mb-4">Dokumentasi</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {selected.dokumentasi.map((d, di) => (
                        <div
                          key={di}
                          className={`aspect-video rounded-xl overflow-hidden bg-charcoal relative ${
                            d.is_thumbnail ? "ring-2 ring-gold-dark" : ""
                          }`}
                        >
                          <img
                            src={getGoogleDriveImageUrl(d.url)}
                            alt={`${selected.title} ${di + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          {d.is_thumbnail && (
                            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-gold-dark text-white text-xs font-medium">
                              Thumbnail
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="py-16 bg-gold-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Regulasi & Landasan Hukum
                </h2>
                <p className="text-foreground/60 leading-relaxed mb-6">
                  Seluruh program berjalan di bawah payung hukum yang jelas dan terukur.
                </p>
                <ul className="space-y-3">
                  {regulations.map((reg) => (
                    <li key={reg} className="flex items-start gap-3 p-3 rounded-xl bg-surface">
                      <span className="w-5 h-5 rounded-full bg-gold-bg flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm text-foreground/70">{reg}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div className="p-8 rounded-2xl bg-surface card-hover">
                <h3 className="text-xl font-bold text-blue mb-4">Dampak Program</h3>
                <div className="space-y-4">
                  {[
                    { label: "Penerima Manfaat", value: "566+", color: "text-green" },
                    { label: "Total Program", value: "42", color: "text-blue" },
                    { label: "Program Kolaborasi", value: "16", color: "text-gold-dark" },
                    { label: "Peserta Binaan", value: "137", color: "text-rose-dark" },
                  ].map((d) => (
                    <div key={d.label} className="flex justify-between items-center p-4 rounded-xl bg-muted">
                      <span className="text-sm text-foreground/70">{d.label}</span>
                      <span className={`text-lg font-bold ${d.color}`}>{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Tertarik Berpartisipasi?
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">
            Kami membuka kesempatan bagi relawan, donatur, dan mitra untuk bergabung.
          </p>
          <Link
            href="/kontak"
            className="inline-flex px-6 py-3 rounded-full bg-white text-charcoal font-semibold hover:opacity-90 transition-all"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>
    </>
  );
}
