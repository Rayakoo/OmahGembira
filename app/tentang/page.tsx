import Link from 'next/link'
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
            <div className="aspect-[4/3] rounded-2xl bg-charcoal overflow-hidden flex flex-col card-hover">
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-white/50 text-sm">Foto Tim Omah Gembira</p>
                  <p className="text-white/30 text-xs mt-1">(placeholder)</p>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-0 h-2">
                <div className="bg-green" />
                <div className="bg-blue" />
                <div className="bg-surface" />
                <div className="bg-gold" />
                <div className="bg-rose" />
              </div>
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

      <section className="py-16 bg-green-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Visi & Misi
            </h2>
            <p className="text-foreground/60 mt-3">
              Berlandaskan Tujuan Pembangunan Berkelanjutan (SDGs).
            </p>
          </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
            <div className="p-8 rounded-2xl bg-surface card-hover">
              <h3 className="text-xl font-bold text-green mb-4">Visi</h3>
              <p className="text-foreground/60 leading-relaxed">
                Mewujudkan lingkungan inklusif yang mendukung edukasi, pendampingan, dan
                pemberdayaan penyandang disabilitas serta keluarga disabilitas.
              </p>
            </div>
            </AnimatedSection>
            <AnimatedSection delay={150}>
            <div className="p-8 rounded-2xl bg-surface card-hover">
              <h3 className="text-xl font-bold text-blue mb-4">Misi</h3>
              <ul className="space-y-3 text-foreground/60">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-green-bg flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-green text-xs font-bold">3</span>
                  </span>
                  <span><strong>Kesejahteraan (Well-being &mdash; SDG 3):</strong> Meningkatkan kualitas hidup penyandang disabilitas dan keluarga mereka melalui program pendampingan psikososial dan kesehatan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-bg flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-blue text-xs font-bold">4</span>
                  </span>
                  <span><strong>Pendidikan Berkualitas (Quality Education &mdash; SDG 4):</strong> Menyediakan akses pendidikan inklusif dan berkualitas untuk penyandang disabilitas, sehingga mereka dapat mengembangkan potensi dan keterampilan yang setara dengan individu lain.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-gold-bg flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-gold-dark text-xs font-bold">8</span>
                  </span>
                  <span><strong>Pertumbuhan Ekonomi (Economic Growth &mdash; SDG 8):</strong> Memberdayakan penyandang disabilitas secara ekonomi melalui kewirausahaan sosial dan peluang kerja yang inklusif.</span>
                </li>
              </ul>
            </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Struktur Organisasi
            </h2>
            <p className="text-foreground/60 mt-3">
              Susunan pengurus Yayasan Omah Gembira.
            </p>
          </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { role: 'Penasihat', members: ['Ely Estiningtyas'], color: 'bg-green-bg border-green/20', textColor: 'text-green', index: 1 },
              { role: 'Pembina', members: ['Titing Rara W'], color: 'bg-blue-bg border-blue/20', textColor: 'text-blue', index: 2 },
              { role: 'Ketua', members: ['Riza Agung P'], color: 'bg-gold-bg border-gold/20', textColor: 'text-gold-dark', index: 3 },
              { role: 'Sekretaris', members: ['Hanna Haidaroh'], color: 'bg-rose-bg border-rose/20', textColor: 'text-rose-dark', index: 4 },
              { role: 'Bendahara', members: ['Cehra'], color: 'bg-green-bg border-green/20', textColor: 'text-green', index: 5 },
              { role: 'PSDM', members: ['Widya (CO)', 'Putri', 'Jeje'], color: 'bg-blue-bg border-blue/20', textColor: 'text-blue', index: 6 },
              { role: 'PUSMEDINFO', members: ['New (CO)'], color: 'bg-gold-bg border-gold/20', textColor: 'text-gold-dark', index: 7 },
              { role: 'Humas', members: ['New (CO)', 'Nani'], color: 'bg-rose-bg border-rose/20', textColor: 'text-rose-dark', index: 8 },
              { role: 'Disability Care', members: ['Marwa (CO)', 'Nilam', 'Naila', 'Tata'], color: 'bg-green-bg border-green/20', textColor: 'text-green', index: 9 },
              { role: 'EDU.INC', members: ['Abdul (CO)', 'Himmah', 'Aje'], color: 'bg-blue-bg border-blue/20', textColor: 'text-blue', index: 10 },
              { role: 'Kriya Gembira', members: ['Chelli (CO)', 'Muthi'], color: 'bg-gold-bg border-gold/20', textColor: 'text-gold-dark', index: 11 },
            ].map((item) => (
              <AnimatedSection key={item.role} delay={item.index * 50}>
                <div className={`p-5 rounded-xl border ${item.color} h-full`}>
                  <h4 className={`text-sm font-bold mb-2 ${item.textColor}`}>{item.role}</h4>
                  <ul className="space-y-0.5">
                    {item.members.map((m) => (
                      <li key={m} className="text-sm text-foreground/70">{m}</li>
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
