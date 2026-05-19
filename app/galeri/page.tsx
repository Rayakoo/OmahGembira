import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

const images = Array.from({ length: 12 }, (_, i) => i)

const categories = ['Semua', 'Kegiatan', 'Kebersamaan', 'Pelatihan', 'Seni & Budaya']

const cardColors = [
  'bg-green-bg border-green/20',
  'bg-blue-bg border-blue/20',
  'bg-gold-bg border-gold/20',
  'bg-rose-bg border-rose/20',
]

export default function GaleriPage() {
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
              Dokumentasi momen-momen berharga dalam setiap kegiatan dan program
              Omah Gembira.
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === 'Semua'
                    ? 'bg-charcoal text-white'
                    : 'bg-muted text-foreground/60 hover:bg-green-bg hover:text-green'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((i) => (
              <div
                key={i}
                className={`aspect-square rounded-xl ${cardColors[i % 4]} flex items-center justify-center border group cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02] ${
                  i === 0 ? 'md:col-span-2 md:row-span-2' : ''
                } ${i === 3 ? 'md:col-span-2' : ''}`}
              >
                <div className="text-center p-4">
                  <svg className="w-10 h-10 mx-auto mb-2 text-foreground/20 group-hover:text-foreground/40 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-foreground/30 text-xs">Foto {i + 1}</p>
                </div>
              </div>
            ))}
          </div>
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
  )
}
