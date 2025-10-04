export default function RekamMedisPage() {
  return (
    <section className="container" style={{paddingTop:16}}>
      <h1 style={{margin:'0 0 4px'}}>Rekam Medis</h1>
      <p style={{margin:'0 0 12px', fontSize:'0.7rem'}}>Ringkasan kesehatan & riwayat kunjungan.</p>
      <div className="tabs" style={{marginBottom:14}}>
        <button className="active">Ringkasan</button>
        <button>Kunjungan</button>
        <button>Resep</button>
        <button>Laboratorium</button>
      </div>
      <div className="mini-metrics">
        <div className="metric"><h4>TD</h4><div className="val">120/80</div></div>
        <div className="metric"><h4>Nadi</h4><div className="val">78</div></div>
        <div className="metric"><h4>BB</h4><div className="val">62kg</div></div>
      </div>
      <div className="list-card" style={{marginTop:16}}>
        <h3 style={{fontSize:'0.75rem', margin:'0 0 6px'}}>Aktivitas Terbaru</h3>
        <ul className="timeline">
          <li>Pemeriksaan umum - Puskesmas Umbulharjo</li>
          <li>Resep obat batuk diterbitkan</li>
          <li>Imunisasi anak (DPT)</li>
          <li>Konsultasi gizi - defisit kalori ringan</li>
        </ul>
      </div>
      <div className="list-card" style={{marginTop:16}}>
        <h3 style={{fontSize:'0.75rem', margin:'0 0 6px'}}>Resep Aktif</h3>
        <ul style={{margin:0, padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:6}}>
          <li style={{fontSize:'.6rem', display:'flex', justifyContent:'space-between'}}><span>Amoksisilin 500mg</span><span>2x sehari</span></li>
          <li style={{fontSize:'.6rem', display:'flex', justifyContent:'space-between'}}><span>Vitamin D3</span><span>1x sehari</span></li>
        </ul>
      </div>
    </section>
  );
}
