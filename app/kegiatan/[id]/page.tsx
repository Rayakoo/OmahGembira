"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import AnimatedSection from "@/components/AnimatedSection";
import { getActivityById, type Activity } from "@/services/activities";
import { toDirectImageUrl } from "@/lib/toDirectImageUrl";

const cardSchemes = [
  { bg: "bg-green-bg", border: "border-green/20", text: "text-green", dot: "bg-green" },
  { bg: "bg-blue-bg", border: "border-blue/20", text: "text-blue", dot: "bg-blue" },
  { bg: "bg-gold-bg", border: "border-gold/20", text: "text-gold-dark", dot: "bg-gold" },
  { bg: "bg-rose-bg", border: "border-rose/20", text: "text-rose-dark", dot: "bg-rose" },
];

export default function KegiatanDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const [activity, setActivity] = useState<Activity | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    getActivityById(id)
      .then((data) => {
        if (data && data.is_published) {
          setActivity(data);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="w-8 h-8 border-4 border-green border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="text-center">
          <p className="text-foreground/40 text-lg">Kegiatan tidak ditemukan.</p>
          <Link href="/kegiatan" className="mt-4 inline-block text-green font-semibold hover:underline">
            &larr; Kembali ke Program
          </Link>
        </div>
      </div>
    );
  }

  const { title, description, tujuan, kegiatan, mitra, dokumentasi } = activity;
  const tujuanList = Array.isArray(tujuan) ? tujuan : [];
  const kegiatanList = Array.isArray(kegiatan) ? kegiatan : [];
  const mitraList = Array.isArray(mitra) ? mitra : [];
  const dokList = Array.isArray(dokumentasi) ? dokumentasi : [];
  const thumbnail = dokList.find((d) => d.is_thumbnail)?.url || dokList[0]?.url || "";

  return (
    <>
      <section className="min-h-[40vh] flex items-center pt-16 bg-green-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-3xl animate-fade-in-up">
            <Link
              href="/kegiatan"
              className="inline-flex items-center gap-2 text-green text-sm font-medium hover:underline mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Kembali ke Program
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              {title}
            </h1>
            <p className="text-lg text-foreground/60 mt-4 leading-relaxed">{description}</p>
          </div>
        </div>
      </section>

      {thumbnail && (
        <section className="py-0 bg-charcoal">
          <div className="max-w-6xl mx-auto">
            <img
              src={toDirectImageUrl(thumbnail)}
              alt={title}
              className="w-full max-h-[500px] object-cover"
            />
          </div>
        </section>
      )}

      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {tujuanList.length > 0 && (
            <AnimatedSection>
              <div className="mb-14">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-green flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Tujuan</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {tujuanList.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-green-bg border border-green/10">
                      <div className="w-8 h-8 rounded-full bg-green flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">{i + 1}</span>
                      </div>
                      <p className="text-foreground/70 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}

          {kegiatanList.length > 0 && (
            <AnimatedSection delay={100}>
              <div className="mb-14">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-blue flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Kegiatan</h2>
                </div>
                <div className={`grid gap-6 ${
                  kegiatanList.length === 1
                    ? "grid-cols-1 max-w-md mx-auto"
                    : kegiatanList.length === 2
                    ? "sm:grid-cols-2 max-w-2xl mx-auto"
                    : "sm:grid-cols-2 lg:grid-cols-3"
                }`}>
                  {kegiatanList.map((item, i) => (
                    <div key={i} className="p-5 rounded-3xl bg-blue-bg border border-blue/10 card-hover">
                      {item.gambar && (
                        <img
                          src={toDirectImageUrl(item.gambar)}
                          alt={item.nama}
                          className="w-full aspect-video rounded-2xl object-cover mb-4"
                        />
                      )}
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue flex items-center justify-center shrink-0">
                          <span className="text-white text-xs font-bold">{i + 1}</span>
                        </div>
                        <span className="font-semibold text-foreground">{item.nama}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}

          {mitraList.length > 0 && (
            <AnimatedSection delay={200}>
              <div className="mb-14">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Kolaborasi & Mitra</h2>
                </div>
                <div className={`grid gap-6 ${
                  mitraList.length === 1
                    ? "grid-cols-1 max-w-md mx-auto"
                    : mitraList.length === 2
                    ? "sm:grid-cols-2 max-w-2xl mx-auto"
                    : "sm:grid-cols-2 lg:grid-cols-3"
                }`}>
                  {mitraList.map((item, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-gold-bg border border-gold/10 card-hover">
                      {item.gambar && (
                        <img
                          src={toDirectImageUrl(item.gambar)}
                          alt={item.nama}
                          className="w-full rounded-2xl mb-5 shadow-lg"
                        />
                      )}
                      <div className="text-center">
                        <span className="font-bold text-foreground text-lg">{item.nama}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}

          {dokList.length > 0 && (
            <AnimatedSection delay={300}>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-rose flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Dokumentasi</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {dokList.map((d, di) => (
                    <div
                      key={di}
                      className={`aspect-square rounded-2xl overflow-hidden bg-charcoal relative group ${
                        d.is_thumbnail ? "ring-2 ring-gold-dark" : ""
                      }`}
                    >
                      <img
                        src={toDirectImageUrl(d.url)}
                        alt={`${title} - ${di + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {d.is_thumbnail && (
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gold-dark text-white text-xs font-semibold">
                          Thumbnail
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      <section className="py-16 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ingin Berkontribusi?
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">
            Kami membuka kesempatan bagi relawan, donatur, dan mitra untuk bergabung dalam program ini.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontak"
              className="px-6 py-3 rounded-full bg-white text-charcoal font-semibold hover:opacity-90 transition-all"
            >
              Hubungi Kami
            </Link>
            <Link
              href="/kegiatan"
              className="px-6 py-3 rounded-full border-2 border-white/30 text-white font-semibold hover:border-white/50 transition-all"
            >
              Lihat Program Lain
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
