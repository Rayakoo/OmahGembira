"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { getActivities, type Activity } from "@/services/activities";
import { toDirectImageUrl } from "@/lib/toDirectImageUrl";

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

  useEffect(() => {
    getActivities()
      .then(setActivities)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

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
                              <Link
                                href={`/kegiatan/${activity.id}`}
                                className={`mt-3 inline-flex items-center gap-1 text-xs font-semibold ${scheme.text} hover:underline`}
                              >
                                Lihat selengkapnya
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            </div>
                          )}
                        </div>

                        <div className={`bg-charcoal min-h-[280px] relative ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                          {thumbnail ? (
                            <Link href={`/kegiatan/${activity.id}`}>
                              <img
                                src={toDirectImageUrl(thumbnail)}
                                alt={activity.title}
                                className="w-full h-full object-cover absolute inset-0"
                                loading="lazy"
                              />
                            </Link>
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
