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
              Media Sosial
            </h2>
            <p className="text-foreground/60 max-w-lg mx-auto">
              Ikuti kami di berbagai platform untuk update terbaru.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                { label: 'Instagram', url: 'https://www.instagram.com/omahgembira?igsh=aThibThsd2NleXI2', color: 'hover:bg-pink-50', icon: (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>) },
                { label: 'TikTok', url: 'https://www.tiktok.com/@omahgembira', color: 'hover:bg-gray-100', icon: (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>) },
                { label: 'YouTube', url: 'https://www.youtube.com/@omahgembira9154/featured', color: 'hover:bg-red-50', icon: (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>) },
                { label: 'Spotify', url: 'https://open.spotify.com/show/64X6a9itdHOCGRmrY2ni8Y?si=SGbBDR3LROGVYw9_J7l00g&nd=1&dlsi=99e5689b87f94849', color: 'hover:bg-green-50', icon: (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg>) },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-5 py-3 rounded-full bg-green-bg border border-green/20 text-foreground font-medium transition-all ${s.color}`}
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </AnimatedSection>
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
