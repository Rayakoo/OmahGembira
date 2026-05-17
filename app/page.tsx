import Link from 'next/link'

const highlights = [
  {
    title: 'Tentang Kami',
    desc: 'Kenali lebih dekat Omah Gembira, visi, misi, dan tim di balik yayasan.',
    href: '/tentang',
    color: 'from-primary/10 to-primary/5',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Program Kami',
    desc: 'Beragam program pemberdayaan untuk penyandang disabilitas.',
    href: '/kegiatan',
    color: 'from-secondary/10 to-secondary/5',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'Galeri',
    desc: 'Momen kebersamaan dalam setiap kegiatan kami.',
    href: '/galeri',
    color: 'from-accent/10 to-accent/5',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Video',
    desc: 'Saksikan dokumentasi kegiatan Omah Gembira.',
    href: '/video',
    color: 'from-primary/10 to-primary/5',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const stats = [
  { value: '50+', label: 'Anggota Aktif' },
  { value: '10+', label: 'Program' },
  { value: '5+', label: 'Tahun Berdiri' },
  { value: '200+', label: 'Tersentuh Manfaat' },
]

export default function Home() {
  return (
    <>
      <section className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Yayasan Pemerhati Disabilitas
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Omah{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Gembira
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-foreground/60 leading-relaxed max-w-lg">
                Ruang aman dan inklusif bagi penyandang disabilitas untuk berkarya,
                belajar, dan tumbuh bersama dalam kebahagiaan.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/tentang"
                  className="px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/25"
                >
                  Kenali Kami
                </Link>
                <Link
                  href="/kontak"
                  className="px-6 py-3 rounded-full border-2 border-primary/30 text-foreground font-semibold hover:border-primary hover:bg-primary/5 transition-all"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>

            <div className="relative animate-fade-in-up">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-foreground/40 text-sm">Gambar Hero</p>
                  <p className="text-foreground/30 text-xs mt-1">(placeholder)</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-secondary/20 -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-accent/20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Jelajahi{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Omah Gembira
              </span>
            </h2>
            <p className="text-foreground/60 mt-3">
              Temukan informasi lengkap tentang yayasan, program, dan kegiatan kami.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group p-6 rounded-2xl bg-white border border-primary/5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-primary mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/60">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background via-secondary/5 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary-dark text-sm font-medium">
                Sekilas Tentang
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Ruang Bahagia untuk{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                  Semua
                </span>
              </h2>
              <p className="text-foreground/60 leading-relaxed">
                Omah Gembira adalah yayasan yang berfokus pada pemberdayaan penyandang
                disabilitas. Kami percaya bahwa setiap individu memiliki potensi luar biasa
                yang layak untuk dikembangkan dalam lingkungan yang suportif dan inklusif.
              </p>
              <Link
                href="/tentang"
                className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors"
              >
                Selengkapnya
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center p-6 rounded-2xl bg-white border border-primary/5">
                  <div className="text-3xl font-bold text-primary">{s.value}</div>
                  <div className="text-sm text-foreground/50 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/30 text-green-700 text-sm font-medium mb-4">
              Galeri
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Momen{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                Kebersamaan
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 flex items-center justify-center border border-primary/5"
              >
                <svg className="w-8 h-8 text-foreground/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/galeri"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary/30 text-foreground font-semibold hover:border-primary hover:bg-primary/5 transition-all"
            >
              Lihat Galeri Lengkap
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Hubungi Kami
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Mari{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Berkolaborasi
            </span>
          </h2>
          <p className="text-foreground/60 max-w-lg mx-auto mb-8">
            Bersama kita ciptakan lingkungan yang inklusif dan ramah bagi
            penyandang disabilitas di Indonesia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontak"
              className="px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/25"
            >
              Hubungi Kami
            </Link>
            <Link
              href="/kegiatan"
              className="px-6 py-3 rounded-full border-2 border-primary/30 text-foreground font-semibold hover:border-primary hover:bg-primary/5 transition-all"
            >
              Lihat Program
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
