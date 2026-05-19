import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

const programs = [
  {
    title: 'EDU.INC',
    subtitle: 'Education Center of Inclusive',
    desc: 'Program pendidikan bina latih dengan pendekatan learning to life — pembelajaran untuk kehidupan — yang bertujuan mengembangkan kemandirian penyandang disabilitas. Berbasis family support, program ini melibatkan orang tua dan keluarga dalam setiap proses pendampingan.',
    bg: 'bg-green-bg',
    color: 'text-green',
    border: 'border-green/20',
    items: [
      'Belajar bahasa lewat mendongeng',
      'Belajar membedakan warna',
      'Bina latih bantu diri (menyetrika, merapikan)',
      'Sosialisasi & keterampilan hidup mandiri',
    ],
  },
  {
    title: 'DCARE',
    subtitle: 'Disability Care',
    desc: 'Program aksi nyata pendampingan dan kepedulian terhadap penyandang disabilitas. Memberikan dukungan psikososial, layanan konsultasi, dan pendampingan langsung untuk meningkatkan kesejahteraan dan kualitas hidup.',
    bg: 'bg-blue-bg',
    color: 'text-blue',
    border: 'border-blue/20',
    items: [
      'Pendampingan psikososial',
      'Konsultasi hak disabilitas',
      'Dukungan kesehatan & well-being',
      'Akses layanan publik inklusif',
    ],
  },
  {
    title: 'KRIYA GEMBIRA',
    subtitle: 'Ekonomi Kreatif Inklusif',
    desc: 'Program pemberdayaan ekonomi kreatif melalui kewirausahaan sosial dan pengembangan keterampilan. Menyediakan wadah bagi penyandang disabilitas untuk berkarya, memasarkan produk, dan meraih kemandirian ekonomi.',
    bg: 'bg-rose-bg',
    color: 'text-rose-dark',
    border: 'border-rose/20',
    items: [
      'Pelatihan keterampilan kreatif',
      'Open booth & pameran karya',
      'Kewirausahaan sosial',
      'Peluang kerja inklusif',
    ],
  },
]

const regulations = [
  'UU No. 8 Tahun 2016 tentang Penyandang Disabilitas',
  'Peraturan Pemerintah terkait disabilitas',
  'Peraturan Daerah Malang Raya',
]

export default function KegiatanPage() {
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
              Tiga program unggulan yang berjalan secara berkelanjutan, diatur oleh
              UU No. 8/2016, PP, dan Perda terkait.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {programs.map((program, idx) => (
              <AnimatedSection key={program.title} delay={idx * 100}>
              <div
                className={`flex flex-col ${
                  idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 p-8 rounded-2xl ${program.bg} border ${program.border} card-hover`}
              >
                <div className="lg:w-1/3">
                  <h2 className={`text-2xl font-bold ${program.color} mb-1`}>{program.title}</h2>
                  <p className="text-sm font-medium text-foreground/50 mb-3">{program.subtitle}</p>
                  <p className="text-foreground/60 leading-relaxed">{program.desc}</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="grid sm:grid-cols-2 gap-3">
                    {program.items.map((item) => (
                      <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-surface/80">
                        <div className={`w-8 h-8 rounded-full ${program.bg} flex items-center justify-center shrink-0`}>
                          <svg className={`w-4 h-4 ${program.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-foreground/70">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </AnimatedSection>
            ))}
          </div>
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
                  { label: 'Penerima Manfaat', value: '566+', color: 'text-green' },
                  { label: 'Total Program', value: '42', color: 'text-blue' },
                  { label: 'Program Kolaborasi', value: '16', color: 'text-gold-dark' },
                  { label: 'Peserta Binaan', value: '137', color: 'text-rose-dark' },
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
  )
}
