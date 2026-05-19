import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import CountUp from '@/components/CountUp'
import Marquee from '@/components/Marquee'

const highlights = [
  {
    title: 'Tentang Kami',
    desc: 'Kenali lebih dekat yayasan, legalitas, visi, misi, dan kontribusi kami.',
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
    bg: 'bg-blue-bg',
    color: 'text-blue',
    border: 'border-blue/20',
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

const programs = [
  {
    title: 'EDU.INC',
    subtitle: 'Education Center of Inclusive',
    desc: 'Program pendidikan bina latih learning to life berbasis family support. Belajar bahasa lewat mendongeng, membedakan warna, hingga bina latih bantu diri.',
    bg: 'bg-green-bg',
    color: 'text-green',
    border: 'border-green/20',
    delay: 0,
  },
  {
    title: 'DCARE',
    subtitle: 'Disability Care',
    desc: 'Program aksi nyata pendampingan dan kepedulian terhadap penyandang disabilitas. Memberikan dukungan psikososial dan akses layanan yang layak.',
    bg: 'bg-blue-bg',
    color: 'text-blue',
    border: 'border-blue/20',
    delay: 150,
  },
  {
    title: 'KRIYA GEMBIRA',
    subtitle: 'Ekonomi Kreatif Inklusif',
    desc: 'Program pemberdayaan ekonomi kreatif melalui kewirausahaan sosial, pelatihan keterampilan, dan pameran karya (open booth).',
    bg: 'bg-rose-bg',
    color: 'text-rose-dark',
    border: 'border-rose/20',
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

            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-[4/3] rounded-2xl bg-charcoal overflow-hidden flex flex-col shadow-2xl card-hover">
                <div className="flex-1 grid grid-cols-5 gap-0">
                  {['bg-green', 'bg-blue', 'bg-surface', 'bg-gold', 'bg-rose'].map((c, i) => (
                    <div key={i} className={`${c} flag-stripe`} />
                  ))}
                </div>
                <div className="bg-surface/10 backdrop-blur-sm text-center py-4">
                  <p className="text-white/70 text-sm font-medium">Disability Pride Flag</p>
                  <p className="text-white/40 text-xs mt-0.5">Ann Magill</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-green/10 -z-10 animate-float" />
            </div>
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
                Tiga program unggulan yang menjadi pilar kegiatan yayasan.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((prog) => (
              <AnimatedSection key={prog.title} delay={prog.delay}>
                <div className={`p-8 rounded-2xl ${prog.bg} border ${prog.border} card-hover h-full`}>
                  <h3 className={`text-xl font-bold ${prog.color} mb-1`}>{prog.title}</h3>
                  <p className="text-sm font-medium text-foreground/50 mb-3">{prog.subtitle}</p>
                  <p className="text-foreground/60 leading-relaxed text-sm">{prog.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={300}>
            <div className="text-center mt-10">
              <Link
                href="/kegiatan"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-charcoal text-white font-semibold btn-hover"
              >
                Lihat Detail Program
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
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
                paguyuban, forum keluarga difabel, dan SLB.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { value: '11', label: 'Forum Keluarga Difabel & Paguyuban', color: 'text-green', delay: 0 },
              { value: '137', label: 'Peserta Binaan', color: 'text-blue', delay: 150 },
              { value: '274', label: 'Keluarga Difabel', color: 'text-gold-dark', delay: 300 },
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
              Jangkauan meliputi Kecamatan Sukun, Kedungkandang, Dau, Singosari, Tajinan,
              Tumpang, Pakis, dan wilayah lainnya di Malang Raya.
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
