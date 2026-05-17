import Link from 'next/link'

const programs = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Pendidikan & Pelatihan',
    desc: 'Program pendidikan dan pelatihan keterampilan yang disesuaikan dengan kebutuhan penyandang disabilitas, termasuk pelatihan komputer, bahasa isyarat, dan keterampilan hidup mandiri.',
    color: 'bg-primary/10 text-primary',
    items: ['Kelas komputer & teknologi', 'Pelatihan bahasa isyarat', 'Keterampilan hidup mandiri', 'Pendidikan vokasional'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Kegiatan Sosial',
    desc: 'Kegiatan kebersamaan dan outing yang mempererat tali silaturahmi antar anggota, termasuk rekreasi, bakti sosial, dan perayaan hari besar.',
    color: 'bg-secondary/10 text-secondary-dark',
    items: ['Outing & rekreasi bersama', 'Bakti sosial', 'Perayaan hari besar', 'Jumat berkah'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Advokasi & Pendampingan',
    desc: 'Pendampingan hukum dan advokasi hak-hak penyandang disabilitas, termasuk akses layanan publik, kesehatan, dan pendidikan.',
    color: 'bg-accent/30 text-green-700',
    items: ['Pendampingan hukum', 'Advokasi akses publik', 'Konsultasi hak disabilitas', 'Pendampingan kesehatan'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2m0 2v10m0-10H5m2 0h2m7 0V2m0 2v10m0-10h-2m2 0h2M4 12h16M4 12v6a2 2 0 002 2h12a2 2 0 002-2v-6" />
      </svg>
    ),
    title: 'Karya & Kreativitas',
    desc: 'Wadah pengembangan bakat seni dan kreativitas anggota melalui berbagai kegiatan seperti melukis, musik, tari, dan kerajinan tangan.',
    color: 'bg-primary/10 text-primary-dark',
    items: ['Lukis & seni rupa', 'Musik & paduan suara', 'Tari inklusif', 'Kerajinan tangan'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Rumah Singgah',
    desc: 'Fasilitas rumah singgah yang aman dan nyaman bagi anggota yang membutuhkan tempat tinggal sementara.',
    color: 'bg-secondary/10 text-secondary-dark',
    items: ['Tinggal sementara', 'Pendampingan harian', 'Kebutuhan dasar', 'Lingkungan aman'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Pelatihan Kerja',
    desc: 'Program pelatihan dan penempatan kerja bagi penyandang disabilitas, bekerja sama dengan berbagai perusahaan dan mitra.',
    color: 'bg-accent/30 text-green-700',
    items: ['Pelatihan kerja', 'Magang perusahaan', 'Penempatan kerja', 'Kewirausahaan'],
  },
]

export default function KegiatanPage() {
  return (
    <>
      <section className="min-h-[40vh] flex items-center pt-16 bg-gradient-to-b from-background via-secondary/5 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary-dark text-sm font-medium mb-6">
              Program & Kegiatan
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Program{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                Kami
              </span>
            </h1>
            <p className="text-lg text-foreground/60 mt-4 leading-relaxed">
              Beragam program dan kegiatan yang kami selenggarakan untuk memberdayakan 
              penyandang disabilitas dan menciptakan lingkungan yang inklusif.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {programs.map((program, idx) => (
              <div
                key={program.title}
                className={`flex flex-col ${
                  idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 p-8 rounded-2xl bg-white border border-primary/5 hover:shadow-lg hover:shadow-primary/5 transition-all`}
              >
                <div className="lg:w-1/3">
                  <div className={`w-16 h-16 rounded-2xl ${program.color} flex items-center justify-center mb-4`}>
                    {program.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">{program.title}</h2>
                  <p className="text-foreground/60 leading-relaxed">{program.desc}</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="grid sm:grid-cols-2 gap-3">
                    {program.items.map((item) => (
                      <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-muted">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-foreground/70">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Tertarik Berpartisipasi?
          </h2>
          <p className="text-foreground/60 max-w-lg mx-auto mb-8">
            Kami membuka kesempatan bagi relawan, donatur, dan mitra untuk 
            bergabung dalam program-program kami.
          </p>
          <Link
            href="/kontak"
            className="inline-flex px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/25"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>
    </>
  )
}
