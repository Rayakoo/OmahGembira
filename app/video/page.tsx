import Link from 'next/link'

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
    title: 'Program Rumah Singgah',
    desc: 'Sekilas tentang fasilitas rumah singgah Omah Gembira.',
  },
  {
    title: 'Workshop Seni Inklusif',
    desc: 'Workshop seni dan kreativitas yang melibatkan seluruh anggota.',
  },
]

export default function VideoPage() {
  return (
    <>
      <section className="min-h-[40vh] flex items-center pt-16 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Video
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Video{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Dokumentasi
              </span>
            </h1>
            <p className="text-lg text-foreground/60 mt-4 leading-relaxed">
              Saksikan keseruan dan kebersamaan dalam setiap kegiatan Omah Gembira 
              melalui video-video berikut.
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
                className="group rounded-2xl overflow-hidden border border-primary/5 bg-white hover:shadow-lg hover:shadow-primary/10 transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 flex items-center justify-center relative">
                  <div className="w-16 h-16 rounded-full bg-white/80 group-hover:bg-white transition-colors flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-primary ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/50 text-white text-xs">
                  0{i + 2}:{String((i + 1) * 15).padStart(2, '0')}
                  </div>
                  <p className="absolute text-foreground/30 text-xs top-3 left-3 bg-white/60 px-2 py-0.5 rounded">
                    placeholder
                  </p>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-foreground/50 mt-1">{video.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-background via-secondary/5 to-background text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Subscribe Channel YouTube Kami
          </h2>
          <p className="text-foreground/60 max-w-lg mx-auto mb-8">
            Dapatkan update video terbaru tentang kegiatan dan program Omah Gembira.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition-all shadow-lg shadow-red-500/25">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube Omah Gembira
            </a>
            <Link
              href="/galeri"
              className="inline-flex px-6 py-3 rounded-full border-2 border-primary/30 text-foreground font-semibold hover:border-primary hover:bg-primary/5 transition-all"
            >
              Lihat Galeri Foto
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
