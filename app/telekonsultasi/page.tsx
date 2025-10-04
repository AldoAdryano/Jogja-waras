import { DoctorCard } from '../../components/DoctorCard';

export default function TelekonsultasiPage() {
  return (
    <section className="container" style={{paddingTop:16}}>
      <h1 style={{margin:'0 0 4px'}}>Telekonsultasi</h1>
      <p style={{margin:'0 0 12px', fontSize:'0.7rem'}}>Konsultasi realtime dengan tenaga medis.</p>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div className="segmented">
          <button className="active">Online</button>
          <button>Semua</button>
        </div>
        <button className="button" style={{fontSize:'.55rem', padding:'8px 14px'}}>Mulai Sesi</button>
      </div>
      <div className="list-cards" style={{marginTop:18}}>
        <div className="list-card" style={{gap:10}}>
          <h3 style={{fontSize:'0.75rem', margin:0}}>Dokter Online Sekarang</h3>
          <div style={{display:'flex', flexDirection:'column', gap:10}}>
            <DoctorCard name="dr. Siti Rahma" specialty="Umum" tags={['chat','video']} availability="Online" />
            <DoctorCard name="dr. Laila Putri" specialty="Gizi" tags={['gizi']} availability="Online" />
            <DoctorCard name="dr. Bambang Seto" specialty="Anak" tags={['anak']} availability="Online" />
          </div>
        </div>
        <div className="list-card" style={{gap:8}}>
          <h3 style={{fontSize:'0.75rem', margin:0}}>Riwayat Sesi</h3>
          <ul style={{margin:0, padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:8}}>
            {history.map(h => (
              <li key={h.id} style={{display:'flex', justifyContent:'space-between', fontSize:'.6rem'}}>
                <span style={{color:'var(--color-text-light)'}}>{h.date} • {h.doctor}</span>
                <span style={{fontWeight:600}}>{h.type}</span>
              </li>
            ))}
          </ul>
          {history.length === 0 && <div className="empty">Belum ada sesi.</div>}
        </div>
      </div>
    </section>
  );
}

const history = [
  { id:1, date:'12/09 08:30', doctor:'dr. Siti', type:'Chat' },
  { id:2, date:'10/09 14:10', doctor:'dr. Bambang', type:'Video' },
  { id:3, date:'05/09 09:20', doctor:'dr. Laila', type:'Chat' }
];
