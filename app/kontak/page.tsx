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
                    href="mailto:omahgembira@gmail.com"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white text-charcoal font-semibold hover:opacity-90 transition-all text-sm"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Kirim Email
                  </a>
                  <a
                    href="https://instagram.com/omahgembira"
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-all text-sm"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    @omahgembira
                  </a>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-green/20 min-h-[250px] bg-green-bg flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-foreground/50 text-sm">Malang Raya</p>
                  <p className="text-foreground/40 text-xs mt-1">Jawa Timur, Indonesia</p>
                  <a
                    href="https://maps.google.com/?q=Malang+Jawa+Timur"
                    target="_blank"
                    className="inline-block mt-4 px-4 py-2 rounded-full bg-charcoal text-white text-sm font-medium hover:opacity-90 transition-all"
                  >
                    Lihat di Google Maps
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
