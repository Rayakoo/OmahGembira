import Link from 'next/link'

const stats = [
  { value: '50+', label: 'Anggota Aktif' },
  { value: '10+', label: 'Program Kegiatan' },
  { value: '5+', label: 'Tahun Berdiri' },
  { value: '200+', label: 'Tersentuh Manfaat' },
]

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Kasih Sayang',
    desc: 'Setiap individu diperlakukan dengan cinta, hormat, dan martabat yang setara.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Inklusivitas',
    desc: 'Semua orang diterima apa adanya tanpa memandang latar belakang atau kondisi.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Pemberdayaan',
    desc: 'Kami percaya setiap penyandang disabilitas memiliki potensi yang perlu dikembangkan.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Kebersamaan',
    desc: 'Bersama kita lebih kuat. Gotong royong adalah inti dari komunitas kami.',
  },
]

const team = [
  { name: 'Dr. Sari Dewi', role: 'Ketua Yayasan', color: 'from-primary/20 to-primary/5' },
  { name: 'Bambang Suprapto', role: 'Sekretaris', color: 'from-secondary/20 to-secondary/5' },
  { name: 'Rina Marlina', role: 'Bendahara', color: 'from-accent/20 to-accent/5' },
  { name: 'Dimas Ardiansyah', role: 'Koordinator Program', color: 'from-primary/20 to-primary/5' },
]

export default function TentangPage() {
  return (
    <>
      <section className="min-h-[40vh] flex items-center pt-16 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Tentang Kami
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Mengenal{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Omah Gembira
              </span>
            </h1>
            <p className="text-lg text-foreground/60 mt-4 leading-relaxed">
              Berawal dari keprihatinan terhadap minimnya ruang inklusif bagi penyandang 
              disabilitas, Omah Gembira hadir sebagai wadah kebersamaan dan pemberdayaan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-foreground/30 text-sm">Foto Tim Omah Gembira</p>
                  <p className="text-foreground/20 text-xs mt-1">(placeholder)</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-secondary/10 -z-10" />
            </div>

            <div className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Cerita Kami</h2>
              <p className="text-foreground/60 leading-relaxed">
                Omah Gembira didirikan pada tahun 2020 oleh sekelompok relawan yang peduli 
                terhadap isu disabilitas. Berawal dari kegiatan kecil berupa pertemuan rutin 
                dan pelatihan keterampilan, kini kami telah berkembang menjadi yayasan yang 
                melayani puluhan penyandang disabilitas di berbagai wilayah.
              </p>
              <p className="text-foreground/60 leading-relaxed">
                Kami percaya bahwa keterbatasan fisik bukanlah penghalang untuk berkarya dan 
                berprestasi. Dengan pendekatan yang humanis dan inklusif, kami membantu setiap 
                individu menemukan potensi terbaik mereka.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-background via-secondary/5 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Visi &amp; Misi
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-primary/5 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground">Visi</h3>
              <p className="text-foreground/60 leading-relaxed">
                Terwujudnya masyarakat inklusif di mana setiap penyandang disabilitas 
                dapat hidup mandiri, bermartabat, dan berpartisipasi penuh dalam segala 
                aspek kehidupan.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-secondary/5 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground">Misi</h3>
              <ul className="space-y-2 text-foreground/60">
                {[
                  'Menyediakan akses pendidikan dan pelatihan keterampilan',
                  'Mendorong kemandirian ekonomi melalui program kewirausahaan',
                  'Melakukan advokasi hak-hak penyandang disabilitas',
                  'Membangun kesadaran masyarakat tentang inklusivitas',
                  'Menciptakan ruang aman bagi pengembangan bakat dan kreativitas',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-secondary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Nilai-Nilai Kami
            </h2>
            <p className="text-foreground/60 mt-3">
              Prinsip yang menjadi landasan setiap langkah kami.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl bg-muted text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary">
                  {v.icon}
                </div>
                <h3 className="font-semibold text-foreground">{v.title}</h3>
                <p className="text-sm text-foreground/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-background via-accent/5 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Tim Kami</h2>
            <p className="text-foreground/60 mt-3">
              Orang-orang di balik Omah Gembira.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t) => (
              <div key={t.name} className="text-center space-y-3">
                <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center`}>
                  <svg className="w-14 h-14 text-foreground/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground">{t.name}</h3>
                <p className="text-sm text-foreground/50">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-6 rounded-2xl bg-muted">
                <div className="text-3xl sm:text-4xl font-bold text-primary">{s.value}</div>
                <div className="text-sm text-foreground/50 mt-2">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/kontak"
              className="inline-flex px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/25"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
