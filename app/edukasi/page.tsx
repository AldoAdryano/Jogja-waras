export default function EdukasiPage() {
  return (
    <section className="container" style={{paddingTop:16}}>
      <h1 style={{margin:'0 0 4px'}}>Edukasi Kesehatan</h1>
      <p style={{margin:'0 0 12px', fontSize:'0.7rem'}}>Konten ringkas & kurasi literasi kesehatan.</p>
      <div className="h-scroll" style={{margin:'0 -4px 12px'}}>
        {['Semua','Gizi','Ibu & Anak','Mental','Penyakit','Gaya Hidup'].map(c => (
          <button key={c} className={`chip ${c==='Semua' ? 'active':''}`}>{c}</button>
        ))}
      </div>
      <div className="list-cards">
        {articles.map(a => (
          <div key={a.id} className="list-card" style={{gap:6}}>
            <h3 style={{fontSize:'0.75rem'}}>{a.title}</h3>
            <p style={{fontSize:'.55rem'}}>{a.snippet}</p>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <span style={{fontSize:'.5rem', color:'var(--color-text-light)'}}>{a.category} • {a.read} mnt</span>
              <button className="button outline" style={{fontSize:'.5rem', padding:'6px 10px'}}>Baca</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const articles = [
  { id:1, title:'Pola Gizi Seimbang Harian', category:'Gizi', read:3, snippet:'Empat pilar utama gizi seimbang untuk aktivitas optimal.' },
  { id:2, title:'Tumbuh Kembang Anak 0-2 Tahun', category:'Ibu & Anak', read:4, snippet:'Periode emas perkembangan otak dan stimulasi tepat.' },
  { id:3, title:'Menjaga Kesehatan Mental di Era Digital', category:'Mental', read:5, snippet:'Teknik sederhana mengurangi overstimulasi layar.' },
  { id:4, title:'Aktivitas Fisik 30 Menit Efektif', category:'Gaya Hidup', read:2, snippet:'Strategi micro-workout bagi yang sibuk.' }
];
