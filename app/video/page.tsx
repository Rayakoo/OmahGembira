import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

const videos = [
  {
    title: 'Kegiatan Outing Omah Gembira',
    desc: 'Kebersamaan anggota Omah Gembira saat outing di alam terbuka.',
  },
  {
    title: 'Pelatihan Keterampilan Batch 3',
    desc: 'Suasana pelatihan keterampilan bagi anggota Omah Gembira.',
  },
  {
    title: 'Perayaan Hari Disabilitas 2025',
    desc: 'Momen perayaan Hari Disabilitas Internasional bersama komunitas.',
  },
  {
    title: 'Wawancara Ketua Yayasan',
    desc: 'Wawancara eksklusif dengan ketua yayasan Omah Gembira.',
  },
  {
    title: 'Program EDU.INC',
    desc: 'Sekilas tentang program pendidikan inklusif Omah Gembira.',
  },
  {
    title: 'Workshop KRIYA GEMBIRA',
    desc: 'Workshop seni dan kreativitas karya penyandang disabilitas.',
  },
]

const cardColors = [
  'bg-green-bg border-green/20',
  'bg-blue-bg border-blue/20',
  'bg-gold-bg border-gold/20',
  'bg-rose-bg border-rose/20',
]

export default function VideoPage() {
  return (
    <>
      <section className="min-h-[40vh] flex items-center pt-16 bg-rose-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 text-rose-dark text-sm font-medium mb-6">
              Video
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Video Dokumentasi
            </h1>
            <p className="text-lg text-foreground/60 mt-4 leading-relaxed">
              Saksikan keseruan dan kebersamaan dalam setiap kegiatan Omah Gembira.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <div
                key={i}
                className={`group rounded-2xl overflow-hidden border ${cardColors[i % 4]} bg-white`}
              >
                <div className="aspect-video bg-charcoal flex items-center justify-center relative">
                  <div className="w-16 h-16 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors flex items-center justify-center">
                    <svg className="w-7 h-7 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/50 text-white text-xs">
                    0{i + 2}:{String((i + 1) * 15).padStart(2, '0')}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground">{video.title}</h3>
                  <p className="text-sm text-foreground/50 mt-1">{video.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gold-bg text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Ikuti Media Sosial Kami
          </h2>
          <p className="text-foreground/60 max-w-lg mx-auto mb-8">
            Dapatkan update terbaru tentang kegiatan dan program Omah Gembira.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://instagram.com/omahgembira" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-charcoal text-white font-semibold hover:opacity-90 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @omahgembira
            </a>
            <Link
              href="/galeri"
              className="inline-flex px-6 py-3 rounded-full border-2 border-foreground/20 text-foreground font-semibold hover:border-foreground/40 transition-all"
            >
              Lihat Galeri Foto
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
