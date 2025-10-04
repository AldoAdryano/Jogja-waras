import Link from 'next/link';
import { DoctorCard } from '../components/DoctorCard';

export default function HomePage() {
  return (
    <>
      <section className="hero container">
        <div style={{maxWidth:780}}>
          <h1>Ekosistem Kesehatan Digital <br />Untuk Warga Yogyakarta</h1>
          <p className="lead">Satu pintu untuk booking layanan, telekonsultasi, rekam medis elektronik, edukasi kesehatan, serta pengingat perawatan keluarga Anda.</p>
          <div style={{display:'flex', gap:12, flexWrap:'wrap', marginTop:24}}>
            <Link href="/booking" className="button">Mulai Booking</Link>
            <Link href="/telekonsultasi" className="button outline">Telekonsultasi</Link>
          </div>
        </div>
      </section>
      <section className="container" style={{marginTop:'var(--space-2)'}}>
        <div className="section-head">
          <h2>Fitur Utama</h2>
        </div>
        <div className="grid features">
          {featureData.map(f => (
            <div key={f.title} className="card feature" style={{display:'flex', flexDirection:'column'}}>
              <div style={{display:'flex', alignItems:'center', gap:12}}>
                <span aria-hidden className="feature-icon" style={{width:42, height:42, display:'grid', placeItems:'center', background:'rgba(255,255,255,0.15)', borderRadius:14}}>{f.icon}</span>
                <h3 style={{margin:'0', fontSize:'1.05rem'}}>{f.title}</h3>
              </div>
              <p style={{margin:'12px 0 0', fontSize:'.8rem', lineHeight:1.4}}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container" style={{marginTop:'var(--space-6)'}}>
        <div className="section-head"><h2>Dokter Unggulan</h2><Link href="/telekonsultasi" className="button secondary" style={{fontSize:'0.7rem'}}>Lihat Semua</Link></div>
        <div className="grid two">
          <DoctorCard name="dr. Siti Rahma" specialty="Dokter Umum" tags={['booking','tele']} />
          <DoctorCard name="drg. Andi Pranata" specialty="Dokter Gigi" tags={['gigi']} />
          <DoctorCard name="dr. Bambang Seto" specialty="Pediatri" tags={['anak']} />
          <DoctorCard name="dr. Laila Putri" specialty="Gizi Klinik" tags={['gizi','konsultasi']} />
        </div>
      </section>
    </>
  );
}

const featureData = [
  { title: 'Direktori Faskes', desc: 'Cari puskesmas, rumah sakit, klinik, apotek secara cepat.', icon: '🏥' },
  { title: 'Booking', desc: 'Antrean digital & jadwal dokter realtime.', icon: '🗓️' },
  { title: 'Telekonsultasi', desc: 'Video & chat dengan tenaga kesehatan.', icon: '💬' },
  { title: 'Rekam Medis', desc: 'Ringkas & aman berbasis interoperabilitas.', icon: '📄' },
  { title: 'Pengingat', desc: 'Obat, kontrol, imunisasi, gaya hidup.', icon: '⏰' },
  { title: 'Edukasi', desc: 'Konten terverifikasi untuk literasi sehat.', icon: '📚' }
];
