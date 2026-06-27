import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import CountUp from '@/components/CountUp'
import Marquee from '@/components/Marquee'
import HomepagePrograms from '@/components/HomepagePrograms'
import HomeHeroGallery from '@/components/HomeHeroGallery'

const highlights = [
  {
    title: 'Tentang Kami',
    desc: 'Kenali lebih dekat sejarah, visi, misi, struktur organisasi, dan kontribusi kami.',
    href: '/tentang',
    color: 'bg-green-bg text-green',
    border: 'border-green/20',
    hover: 'hover:border-green/40',
    delay: 0,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Program Kami',
    desc: 'EDU.INC, DCARE, KRIYA GEMBIRA — program berkelanjutan untuk edukasi dan pemberdayaan.',
    href: '/kegiatan',
    color: 'bg-blue-bg text-blue',
    border: 'border-blue/20',
    hover: 'hover:border-blue/40',
    delay: 100,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'Galeri',
    desc: 'Momen kebersamaan dalam setiap kegiatan edukasi, pendampingan, dan pemberdayaan.',
    href: '/galeri',
    color: 'bg-gold-bg text-gold-dark',
    border: 'border-gold/20',
    hover: 'hover:border-gold/40',
    delay: 200,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Video',
    desc: 'Saksikan dokumentasi kegiatan dan dampak nyata program Omah Gembira.',
    href: '/video',
    color: 'bg-rose-bg text-rose-dark',
    border: 'border-rose/20',
    hover: 'hover:border-rose/40',
    delay: 300,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const statItems = [
  { value: '566', label: 'Penerima Manfaat', color: 'text-green' },
  { value: '36', label: 'Pengurus', color: 'text-blue' },
  { value: '81', label: 'Relawan', color: 'text-gold-dark' },
  { value: '42', label: 'Program Kerja', color: 'text-rose-dark' },
]

const marqueeItems = [
  { value: '566+', label: 'Penerima Manfaat', color: 'text-green' },
  { value: '36', label: 'Pengurus Aktif', color: 'text-blue' },
  { value: '81+', label: 'Relawan', color: 'text-gold-dark' },
  { value: '11', label: 'Wilayah Jangkauan', color: 'text-rose-dark' },
  { value: '42', label: 'Program', color: 'text-green' },
  { value: '16', label: 'Kolaborasi', color: 'text-blue' },
]

const sdgPillars = [
  {
    number: '3',
    title: 'Kesejahteraan',
    sub: 'SDG 3 — Well-being',
    desc: 'Meningkatkan kualitas hidup melalui pendampingan psikososial dan kesehatan bagi penyandang disabilitas dan keluarga.',
    bg: 'bg-green-bg',
    color: 'text-green',
    border: 'border-green/20',
    delay: 0,
  },
  {
    number: '4',
    title: 'Pendidikan Berkualitas',
    sub: 'SDG 4 — Quality Education',
    desc: 'Menyediakan akses pendidikan inklusif agar penyandang disabilitas dapat mengembangkan potensi secara setara.',
    bg: 'bg-red-bg',
    color: 'text-red-dark',
    border: 'border-red/20',
    delay: 150,
  },
  {
    number: '8',
    title: 'Pertumbuhan Ekonomi',
    sub: 'SDG 8 — Economic Growth',
    desc: 'Memberdayakan secara ekonomi melalui kewirausahaan sosial dan peluang kerja inklusif lewat KRIYA GEMBIRA.',
    bg: 'bg-gold-bg',
    color: 'text-gold-dark',
    border: 'border-gold/20',
    delay: 300,
  },
]

export default function Home() {
  return (
    <>
      <section className="min-h-screen flex items-center pt-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green/5 blur-3xl animate-pulse-soft" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-blue/5 blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-bg text-green text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green animate-pulse-soft" />
                Yayasan Pemerhati Disabilitas
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Omah{' '}
                <span className="text-green inline-block animate-float">Gembira</span>
              </h1>
              <p className="text-lg sm:text-xl text-foreground/60 leading-relaxed max-w-lg">
                Memberikan dampak positif kepada keluarga dan penyandang disabilitas
                melalui edukasi, pendampingan, serta pemberdayaan.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/tentang"
                  className="px-6 py-3 rounded-full bg-charcoal text-white font-semibold btn-hover"
                >
                  Kenali Kami
                </Link>
                <Link
                  href="/kontak"
                  className="px-6 py-3 rounded-full border-2 border-foreground/20 text-foreground font-semibold hover:border-foreground/40 btn-hover"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>

            <HomeHeroGallery />
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Jelajahi Omah Gembira
              </h2>
              <p className="text-foreground/60 mt-3">
                Temukan informasi lengkap tentang yayasan, program, dan kegiatan kami.
              </p>
            </div>
          </AnimatedSection>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <AnimatedSection key={item.href} delay={item.delay}>
                <Link
                  href={item.href}
                  className={`group p-6 rounded-2xl ${item.color} border ${item.border} ${item.hover} card-hover block`}
                >
                  <div className="w-12 h-12 rounded-xl bg-surface/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/60">{item.desc}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-bg relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-green/10 blur-3xl animate-float" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 text-green text-sm font-medium">
                  Sekilas Tentang
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Ruang Inklusif untuk Semua
                </h2>
                <p className="text-foreground/60 leading-relaxed">
                  Yayasan Pemerhati Disabilitas Omah Gembira berfokus memberikan dampak
                  positif kepada keluarga dan penyandang disabilitas di Malang Raya melalui
                  edukasi, pendampingan, serta pemberdayaan.
                </p>
                <p className="text-foreground/60 leading-relaxed">
                  Berlegalitas SK Kemenkumham No. AHU-0010900.AH.01.04. Tahun 2024.
                </p>
                <Link
                  href="/tentang"
                  className="inline-flex items-center gap-2 text-green font-semibold hover:text-green-dark transition-colors group"
                >
                  Selengkapnya
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-2 gap-4">
              {statItems.map((s) => (
                <AnimatedSection key={s.label} delay={100}>
                  <div className="text-center p-6 rounded-2xl bg-surface card-hover">
                    <div className={`text-3xl font-bold ${s.color}`}>
                      <CountUp end={parseInt(s.value)} />+
                    </div>
                    <div className="text-sm text-foreground/50 mt-1">{s.label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green/5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <p className="text-sm font-medium text-foreground/50 tracking-wider uppercase text-center">
            Dampak & Jangkauan Kami
          </p>
        </div>
        <Marquee items={marqueeItems} />
      </section>

      <section className="py-20 bg-blue-bg relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 text-blue text-sm font-medium mb-4">
                Komitmen SDG
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Pilar Pembangunan Berkelanjutan
              </h2>
              <p className="text-foreground/60 mt-3">
                Misi kami selaras dengan Tujuan Pembangunan Berkelanjutan (SDGs).
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {sdgPillars.map((pillar) => (
              <AnimatedSection key={pillar.number} delay={pillar.delay}>
                <div className={`p-8 rounded-2xl ${pillar.bg} border ${pillar.border} card-hover h-full`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-xs font-bold text-foreground/40 tracking-wider">
                      SDG {pillar.number}
                    </div>
                    <div className={`text-sm font-semibold ${pillar.color}`}>{pillar.sub}</div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
                  <p className="text-foreground/60 leading-relaxed text-sm">{pillar.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gold-bg relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 text-gold-dark text-sm font-medium mb-4">
                Program Berkelanjutan
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Program Kami
              </h2>
              <p className="text-foreground/60 mt-3">
                Program unggulan yang menjadi pilar kegiatan yayasan.
              </p>
            </div>
          </AnimatedSection>
          <HomepagePrograms />
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-bg text-rose-dark text-sm font-medium mb-4">
                Tetap Terhubung
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Publikasi Media
              </h2>
              <p className="text-foreground/60 mt-3">
                Ikuti kami di media sosial untuk update terbaru.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Omah Gembira',
                handle: '@omahgembira',
                url: 'https://www.instagram.com/omahgembira?igsh=aThibThsd2NleXI2',
                color: 'bg-green-bg text-green border-green/20',
              },
              {
                name: 'Disability Care',
                handle: '@dcare.id',
                url: 'https://www.instagram.com/dcare.id?igsh=YnBzdGhsdjhxcGti',
                color: 'bg-blue-bg text-blue border-blue/20',
              },
              {
                name: 'Kriya Gembira',
                handle: '@kriya.gembira',
                url: 'https://www.instagram.com/kriya.gembira?igsh=MWE0eGh5cGxrZDNwcg==',
                color: 'bg-gold-bg text-gold-dark border-gold/20',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.name} delay={i * 100}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-8 rounded-2xl ${item.color} border card-hover block text-center`}
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-surface/80 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{item.name}</h3>
                  <p className="text-sm text-foreground/50 mb-3">{item.handle}</p>
                  <span className="inline-flex items-center text-sm font-medium opacity-70 hover:opacity-100">
                    Kunjungi Instagram &rarr;
                  </span>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-rose-bg relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 text-rose-dark text-sm font-medium mb-4">
                Jaringan & Kolaborasi
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Ekosistem Inklusif
              </h2>
              <p className="text-foreground/60 mt-3">
                Membangun ekosistem inklusif yang kuat di Malang Raya bersama berbagai
                paguyuban orang tua penyandang disabilitas, forum keluarga difabel, dan SLB.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { value: '10', label: 'Paguyuban Orang Tua', color: 'text-green', delay: 0 },
              { value: '350', label: 'Penyandang Disabilitas', color: 'text-blue', delay: 150 },
              { value: '5', label: 'Kecamatan Jangkauan', color: 'text-gold-dark', delay: 300 },
            ].map((item) => (
              <AnimatedSection key={item.label} delay={item.delay}>
                <div className="p-8 rounded-2xl bg-surface text-center card-hover">
                  <div className={`text-4xl font-bold ${item.color} mb-2`}>
                    <CountUp end={parseInt(item.value)} />
                  </div>
                  <p className="text-sm font-medium text-foreground/70">{item.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={200}>
            <p className="text-center text-foreground/60 text-sm max-w-2xl mx-auto">
              Jangkauan meliputi lima kecamatan di Kota dan Kabupaten Malang, bermitra dengan
              10 paguyuban orang tua penyandang disabilitas, serta didukung pendamping
              penyandang disabilitas Kementerian Sosial Malang.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/[0.02] blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Mari Berkolaborasi
            </h2>
            <p className="text-white/60 max-w-lg mx-auto mb-8">
              Bersama kita ciptakan lingkungan yang inklusif dan ramah bagi
              penyandang disabilitas di Indonesia.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/kontak"
                className="px-6 py-3 rounded-full bg-white text-charcoal font-semibold btn-hover"
              >
                Hubungi Kami
              </Link>
              <Link
                href="/kegiatan"
                className="px-6 py-3 rounded-full border-2 border-white/30 text-white font-semibold hover:border-white/50 btn-hover"
              >
                Lihat Program
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
