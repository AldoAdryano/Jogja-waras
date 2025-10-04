export default function BookingPage() {
  return (
    <section className="container" style={{paddingTop:16}}>
      <h1 style={{margin:'0 0 4px'}}>Booking Layanan</h1>
      <p style={{margin:'0 0 12px', fontSize:'0.7rem'}}>Cari dokter & pilih slot jadwal secara cepat.</p>
      <div className="card" style={{padding:'14px 14px 18px', gap:12}}>
        <div className="h-scroll" style={{margin:'0 -4px'}}>
          <button className="chip active">Semua</button>
          <button className="chip">Umum</button>
          <button className="chip">Gigi</button>
          <button className="chip">Anak</button>
          <button className="chip">Gizi</button>
          <button className="chip">Obgyn</button>
        </div>
        <div style={{display:'flex', gap:8}}>
          <input placeholder="Cari dokter / fasilitas" style={{fontSize:'0.65rem'}} />
          <button className="button" style={{fontSize:'0.6rem', padding:'8px 14px'}}>Cari</button>
        </div>
        <div className="segmented" style={{marginTop:4}}>
          <button className="active">Tanggal</button>
          <button>Minggu Ini</button>
          <button>Bulan</button>
        </div>
        <div style={{display:'flex', gap:6, marginTop:4, overflowX:'auto'}} className="h-scroll">
          {['Sen','Sel','Rab','Kam','Jum','Sab','Min'].map(d => (
            <div key={d} style={{flex:'0 0 auto', background:'#fff', border:'1px solid var(--color-outline)', padding:'8px 10px', borderRadius:12, fontSize:'.55rem', textAlign:'center', fontWeight:600}}>{d}<br/><span style={{fontSize:'.6rem', fontWeight:400}}>12</span></div>
          ))}
        </div>
      </div>
      <div style={{marginTop:16}} className="list-cards">
        <div className="list-card" style={{gap:6}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <h3 style={{fontSize:'0.75rem'}}>dr. Siti Rahma <span style={{fontWeight:400, color:'var(--color-text-light)'}}>• Umum</span></h3>
            <span className="badge" style={{fontSize:'0.5rem'}}>Online</span>
          </div>
          <div className="slot-grid">
            {['08:00','08:30','09:00','09:30','10:00','10:30'].map(s => <div key={s} className="slot free">{s}</div>)}
            <div className="slot full">11:00</div>
          </div>
        </div>
        <div className="list-card" style={{gap:6}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <h3 style={{fontSize:'0.75rem'}}>drg. Andi Pranata <span style={{fontWeight:400, color:'var(--color-text-light)'}}>• Gigi</span></h3>
            <span className="badge" style={{fontSize:'0.5rem'}}>Antrean</span>
          </div>
          <div className="slot-grid">
            {['13:00','13:30','14:00','14:30','15:00'].map(s => <div key={s} className="slot free">{s}</div>)}
            <div className="slot full">15:30</div>
          </div>
        </div>
      </div>
    </section>
  );
}
