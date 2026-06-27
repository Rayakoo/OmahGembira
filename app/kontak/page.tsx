'use client'

import { useState } from 'react'

export default function KontakPage() {
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="min-h-[40vh] flex items-center pt-16 bg-green-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 text-green text-sm font-medium mb-6">
              Hubungi Kami
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Mari Berkolaborasi
            </h1>
            <p className="text-lg text-foreground/60 mt-4 leading-relaxed">
              Punya pertanyaan, ingin bergabung, atau berkolaborasi? Kami siap
              mendengar dan membantu Anda.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="rounded-2xl bg-charcoal p-8 text-white space-y-6">
                <h3 className="text-xl font-bold">Informasi Kontak</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Jangan ragu untuk menghubungi kami melalui saluran berikut.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Wilayah Operasional</p>
                      <p className="text-white/60 text-sm">Malang Raya, Jawa Timur</p>
                      <p className="text-white/40 text-xs mt-1">Menjangkau 11 kecamatan dan wilayah sekitar</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <p className="text-white/60 text-sm">omahgembira@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Jam Operasional</p>
                      <p className="text-white/60 text-sm">Senin - Jumat, 08:00 - 16:00 WIB</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href="https://www.instagram.com/omahgembira?igsh=aThibThsd2NleXI2"
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white text-charcoal font-semibold hover:opacity-90 transition-all text-sm"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    @omahgembira
                  </a>
                </div>

                <div className="flex gap-3 pt-1">
                  <a
                    href="https://www.tiktok.com/@omahgembira"
                    target="_blank"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-all text-sm"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                    @omahgembira
                  </a>
                </div>

                <div className="flex gap-3 pt-1">
                  <a
                    href="https://www.youtube.com/@omahgembira9154/featured"
                    target="_blank"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-all text-sm"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    @omahgembira9154
                  </a>
                </div>

                <div className="flex gap-3 pt-1">
                  <a
                    href="https://open.spotify.com/show/64X6a9itdHOCGRmrY2ni8Y?si=SGbBDR3LROGVYw9_J7l00g&nd=1&dlsi=99e5689b87f94849"
                    target="_blank"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-all text-sm"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                    Podcast Omah Gembira
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-green/20 bg-surface p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Kirim Pesan</h3>

                {submitted ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-green-bg flex items-center justify-center">
                      <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">Pesan Terkirim!</h4>
                    <p className="text-foreground/60 text-sm">
                      Terima kasih. Pesan Anda telah kami terima dan akan segera kami respon.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2 rounded-full bg-charcoal text-white font-medium hover:opacity-90 transition-all"
                    >
                      Kirim Pesan Lagi
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground/70 mb-1.5">Nama Lengkap</label>
                        <input
                          type="text"
                          required
                          placeholder="Nama Anda"
                          className="w-full px-4 py-3 rounded-xl border border-green/20 bg-muted focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green/50 transition-all text-foreground placeholder:text-foreground/30"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground/70 mb-1.5">Email</label>
                        <input
                          type="email"
                          required
                          placeholder="email@anda.com"
                          className="w-full px-4 py-3 rounded-xl border border-green/20 bg-muted focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green/50 transition-all text-foreground placeholder:text-foreground/30"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground/70 mb-1.5">Telepon / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="+62 812-XXXX-XXXX"
                        className="w-full px-4 py-3 rounded-xl border border-green/20 bg-muted focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green/50 transition-all text-foreground placeholder:text-foreground/30"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground/70 mb-1.5">Subjek</label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-xl border border-green/20 bg-muted focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green/50 transition-all text-foreground"
                      >
                        <option value="">Pilih subjek...</option>
                        <option>Ingin Bergabung</option>
                        <option>Donasi &amp; Kerjasama</option>
                        <option>Informasi Program</option>
                        <option>Kritik &amp; Saran</option>
                        <option>Lainnya</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground/70 mb-1.5">Pesan</label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tulis pesan Anda di sini..."
                        className="w-full px-4 py-3 rounded-xl border border-green/20 bg-muted focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green/50 transition-all text-foreground placeholder:text-foreground/30 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 rounded-full bg-charcoal text-white font-semibold hover:opacity-90 transition-all"
                    >
                      Kirim Pesan
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
