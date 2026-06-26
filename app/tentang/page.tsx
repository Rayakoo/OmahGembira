import Link from 'next/link'
import Image from 'next/image'
import AnimatedSection from '@/components/AnimatedSection'

const values = [
  {
    title: 'Kasih Sayang',
    desc: 'Setiap individu diperlakukan dengan cinta, hormat, dan martabat yang setara.',
    bg: 'bg-green-bg',
    color: 'text-green',
  },
  {
    title: 'Inklusivitas',
    desc: 'Semua orang diterima apa adanya tanpa memandang latar belakang atau kondisi.',
    bg: 'bg-surface',
    color: 'text-blue',
  },
  {
    title: 'Pemberdayaan',
    desc: 'Kami percaya setiap penyandang disabilitas memiliki potensi yang perlu dikembangkan.',
    bg: 'bg-gold-bg',
    color: 'text-gold-dark',
  },
  {
    title: 'Kebersamaan',
    desc: 'Bersama kita lebih kuat. Gotong royong adalah inti dari komunitas kami.',
    bg: 'bg-rose-bg',
    color: 'text-rose-dark',
  },
]

export default function TentangPage() {
  return (
    <>
      <section className="min-h-[40vh] flex items-center pt-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-bg text-green text-sm font-medium mb-6">
              Tentang Kami
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Mengenal{' '}
              <span className="text-green">Omah Gembira</span>
            </h1>
            <p className="text-lg text-foreground/60 mt-4 leading-relaxed">
              Yayasan Pemerhati Disabilitas Omah Gembira hadir untuk memberikan dampak
              positif kepada keluarga dan penyandang disabilitas di Malang Raya.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
            <div className="aspect-[4/3] rounded-2xl bg-charcoal overflow-hidden card-hover relative">
              <Image
                src="/omah_gembira1.jpg"
                alt="Foto Tim Omah Gembira"
                fill
                className="object-cover"
              />
            </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
            <div className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Sejarah</h2>
              <p className="text-foreground/60 leading-relaxed">
                Omah Gembira merupakan komunitas pemerhati dan pemberdaya penyandang
                disabilitas di Malang Raya yang didirikan pada tahun 2020 oleh sekelompok
                mahasiswa dan penggiat sosial. Komunitas ini hadir sebagai bentuk kepedulian
                terhadap keterbatasan ruang kesetaraan bagi penyandang disabilitas, dengan
                tujuan membangun generasi muda yang berempati, kreatif, inovatif, dan mandiri
                serta berkontribusi dalam mewujudkan lingkungan yang inklusif.
              </p>
              <p className="text-foreground/60 leading-relaxed">
                Omah Gembira sendiri berada di bawah binaan Pendamping Penyandang Disabilitas
                Kementerian Sosial Malang dan bermitra dengan 10 paguyuban orang tua penyandang
                disabilitas yang tersebar di lima kecamatan di Kota dan Kabupaten Malang dengan
                basis sekitar 350 penyandang disabilitas.
              </p>
              <p className="text-foreground/60 leading-relaxed">
                Sebagai fasilitator pemberdayaan, Omah Gembira menyelenggarakan berbagai program
                yang berfokus pada peningkatan kualitas hidup penyandang disabilitas yang meliputi
                edukasi masyarakat untuk mengurangi stigma, orientasi relawan, program Duta
                Inklusif, pelatihan keterampilan, pengembangan kewirausahaan melalui
                Inspirepreneur, serta berbagai kegiatan pemberdayaan lainnya.
              </p>
            </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-bg relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 right-0 w-72 h-72 rounded-full bg-green/10 blur-3xl" />
          <div className="absolute bottom-0 left-10 w-64 h-64 rounded-full bg-blue/5 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 text-green text-sm font-medium mb-4">
                Visi & Misi
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Arah & Tujuan Kami
              </h2>
              <p className="text-foreground/60 mt-3">
                Berlandaskan Tujuan Pembangunan Berkelanjutan (SDGs).
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="p-10 rounded-2xl bg-surface border border-green/10 text-center mb-10 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-green flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <span className="inline-block px-4 py-1 rounded-full bg-green-bg text-green text-sm font-bold tracking-wider uppercase mb-4 mt-2">
                Visi
              </span>
              <p className="text-2xl sm:text-3xl font-bold text-foreground leading-relaxed max-w-2xl mx-auto">
                Mewujudkan lingkungan inklusif yang mendukung edukasi, pendampingan, dan
                pemberdayaan penyandang disabilitas serta keluarga disabilitas.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="p-10 rounded-2xl bg-surface border border-blue/10">
              <div className="flex items-center gap-3 mb-8">
                <span className="px-4 py-1 rounded-full bg-blue-bg text-blue text-sm font-bold tracking-wider uppercase">
                  Misi
                </span>
              </div>
              <div className="grid gap-5">
                {[
                  { num: '3', sdg: 'Kesejahteraan (Well-being)', detail: 'Meningkatkan kualitas hidup penyandang disabilitas dan keluarga mereka melalui program pendampingan psikososial dan kesehatan.', color: 'text-green', bg: 'bg-green-bg', border: 'border-green/20' },
                  { num: '4', sdg: 'Pendidikan Berkualitas (Quality Education)', detail: 'Menyediakan akses pendidikan inklusif dan berkualitas untuk penyandang disabilitas, sehingga mereka dapat mengembangkan potensi dan keterampilan yang setara dengan individu lain.', color: 'text-blue', bg: 'bg-blue-bg', border: 'border-blue/20' },
                  { num: '8', sdg: 'Pertumbuhan Ekonomi (Economic Growth)', detail: 'Memberdayakan penyandang disabilitas secara ekonomi melalui kewirausahaan sosial dan peluang kerja yang inklusif.', color: 'text-gold-dark', bg: 'bg-gold-bg', border: 'border-gold/20' },
                ].map((m) => (
                  <div key={m.num} className={`flex gap-4 p-5 rounded-xl ${m.bg} border ${m.border}`}>
                    <div className="shrink-0 w-12 h-12 rounded-full bg-surface flex items-center justify-center">
                      <span className={`text-lg font-black ${m.color}`}>{m.num}</span>
                    </div>
                    <div>
                      <h4 className={`font-bold ${m.color} mb-1`}>SDG {m.num} — {m.sdg}</h4>
                      <p className="text-sm text-foreground/60 leading-relaxed">{m.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-10 w-80 h-80 rounded-full bg-green/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-bg text-green text-sm font-medium mb-4">
                Struktur Organisasi
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Pengurus Yayasan
              </h2>
              <p className="text-foreground/60 mt-3">
                Susunan pengurus Yayasan Omah Gembira periode 2024.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              { role: 'Penasihat', members: ['Ely Estiningtyas'], color: 'bg-green-bg border-green/30', textColor: 'text-green', iconColor: 'bg-green', delay: 0 },
              { role: 'Pembina', members: ['Titing Rara W'], color: 'bg-blue-bg border-blue/30', textColor: 'text-blue', iconColor: 'bg-blue', delay: 50 },
              { role: 'Ketua', members: ['Riza Agung P'], color: 'bg-gold-bg border-gold/30', textColor: 'text-gold-dark', iconColor: 'bg-gold', delay: 100 },
              { role: 'Sekretaris', members: ['Hanna Haidaroh'], color: 'bg-rose-bg border-rose/30', textColor: 'text-rose-dark', iconColor: 'bg-rose', delay: 150 },
              { role: 'Bendahara', members: ['Cehra'], color: 'bg-green-bg border-green/30', textColor: 'text-green', iconColor: 'bg-green', delay: 200 },
            ].map((item) => (
              <AnimatedSection key={item.role} delay={item.delay}>
                <div className={`flex items-center gap-6 p-5 rounded-2xl ${item.color} border`}>
                  <div className={`w-16 h-16 rounded-full ${item.iconColor} flex items-center justify-center shrink-0 shadow-md`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-widest ${item.textColor}/70 mb-1`}>{item.role}</p>
                    <p className="text-xl font-extrabold text-foreground">{item.members[0]}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { role: 'PSDM', members: ['Widya (CO)', 'Putri', 'Jeje'], color: 'bg-blue-bg border-blue/20', textColor: 'text-blue', iconColor: 'bg-blue', delay: 250 },
              { role: 'PUSMEDINFO', members: ['New (CO)'], color: 'bg-gold-bg border-gold/20', textColor: 'text-gold-dark', iconColor: 'bg-gold', delay: 300 },
              { role: 'Humas', members: ['New (CO)', 'Nani'], color: 'bg-rose-bg border-rose/20', textColor: 'text-rose-dark', iconColor: 'bg-rose', delay: 350 },
              { role: 'Disability Care', members: ['Marwa (CO)', 'Nilam', 'Naila', 'Tata'], color: 'bg-green-bg border-green/20', textColor: 'text-green', iconColor: 'bg-green', delay: 400 },
              { role: 'EDU.INC', members: ['Abdul (CO)', 'Himmah', 'Aje'], color: 'bg-blue-bg border-blue/20', textColor: 'text-blue', iconColor: 'bg-blue', delay: 450 },
              { role: 'Kriya Gembira', members: ['Chelli (CO)', 'Muthi'], color: 'bg-gold-bg border-gold/20', textColor: 'text-gold-dark', iconColor: 'bg-gold', delay: 500 },
            ].map((item) => (
              <AnimatedSection key={item.role} delay={item.delay}>
                <div className={`p-6 rounded-2xl ${item.color} border h-full`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full ${item.iconColor} flex items-center justify-center shrink-0`}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className={`text-sm font-extrabold uppercase tracking-wide ${item.textColor}`}>{item.role}</h4>
                  </div>
                  <ul className="space-y-2">
                    {item.members.map((m) => (
                      <li key={m} className="flex items-center gap-2 text-foreground/80 font-semibold text-sm">
                        <div className="w-7 h-7 rounded-full bg-surface/60 flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 text-foreground/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-bg">
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
              <div key={v.title} className={`p-6 rounded-2xl ${v.bg} text-center space-y-3`}>
                <h3 className={`font-semibold ${v.color}`}>{v.title}</h3>
                <p className="text-sm text-foreground/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gold-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-surface">
              <h3 className="text-xl font-bold text-gold-dark mb-4">Legalitas Hukum</h3>
              <p className="text-foreground/60 leading-relaxed mb-4">
                Yayasan Pemerhati Disabilitas Omah Gembira telah memiliki pengesahan hukum
                dari Kementerian Hukum dan HAM RI.
              </p>
              <div className="p-4 rounded-xl bg-gold-bg border border-gold/20">
                <p className="font-mono text-sm font-semibold text-gold-dark">
                  AHU-0010900.AH.01.04. Tahun 2024
                </p>
                <p className="text-xs text-foreground/50 mt-1">Tanggal 16 Juli 2024</p>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-surface">
              <h3 className="text-xl font-bold text-rose-dark mb-4">Data Organisasi</h3>
              <div className="space-y-3">
                {[
                  { label: 'Penerima Manfaat', value: '566+', color: 'text-green' },
                  { label: 'Pengurus', value: '36', color: 'text-blue' },
                  { label: 'Relawan / Volunteer', value: '81+', color: 'text-gold-dark' },
                  { label: 'Wilayah Jangkauan', value: '11', color: 'text-rose-dark' },
                  { label: 'Program Kerja', value: '42', color: 'text-green' },
                  { label: 'Program Kolaborasi', value: '16', color: 'text-blue' },
                ].map((d) => (
                  <div key={d.label} className="flex justify-between items-center p-3 rounded-xl bg-muted">
                    <span className="text-sm text-foreground/70">{d.label}</span>
                    <span className={`text-sm font-bold ${d.color}`}>{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-rose-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Jaringan & Kemitraan
            </h2>
            <p className="text-foreground/60 mt-3">
              Membangun ekosistem inklusif bersama berbagai pihak.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { value: '10', label: 'Paguyuban Orang Tua', color: 'text-green' },
              { value: '350+', label: 'Penyandang Disabilitas', color: 'text-blue' },
              { value: '5', label: 'Kecamatan Jangkauan', color: 'text-gold-dark' },
            ].map((item) => (
              <div key={item.label} className="p-8 rounded-2xl bg-surface text-center">
                <div className={`text-4xl font-bold ${item.color} mb-2`}>{item.value}</div>
                <p className="text-sm font-medium text-foreground/70">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-foreground/60 text-sm mt-8 max-w-2xl mx-auto">
            Jangkauan meliputi lima kecamatan di Kota dan Kabupaten Malang, bermitra dengan
            10 paguyuban orang tua penyandang disabilitas dengan basis sekitar 350 penyandang
            disabilitas, serta bekerja sama dengan SLB dan pendamping penyandang disabilitas
            Kementerian Sosial Malang.
          </p>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Daftar Mitra / Partner
            </h2>
            <p className="text-foreground/60 max-w-lg mx-auto">
              Bersama mitra kami membangun ekosistem inklusif yang berkelanjutan.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <ul className="mt-8 space-y-3 max-w-sm mx-auto">
              {['Kopi Cinta', 'Sarapan Pagi Harmoni', 'Happy Dough and Bakery'].map((partner, i) => (
                <li
                  key={partner}
                  className="p-4 rounded-xl bg-green-bg border border-green/20 text-foreground font-medium"
                >
                  {partner}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Bergabunglah Bersama Kami
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">
            Jadilah bagian dari perubahan. Mari berkontribusi sebagai relawan, mitra,
            atau donatur.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/kontak"
              className="px-6 py-3 rounded-full bg-white text-charcoal font-semibold hover:opacity-90 transition-all"
            >
              Hubungi Kami
            </Link>
            <Link
              href="/kegiatan"
              className="px-6 py-3 rounded-full border-2 border-white/30 text-white font-semibold hover:border-white/50 transition-all"
            >
              Lihat Program
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
