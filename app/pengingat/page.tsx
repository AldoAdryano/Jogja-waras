export default function PengingatPage() {
  return (
    <section className="container" style={{paddingTop:16}}>
      <h1 style={{margin:'0 0 4px'}}>Pengingat</h1>
      <p style={{margin:'0 0 12px', fontSize:'0.7rem'}}>Kelola jadwal obat, kontrol, imunisasi dan gaya hidup.</p>
      <div className="tabs" style={{marginBottom:14}}>
        <button className="active">Aktif</button>
        <button>Riwayat</button>
      </div>
      <div className="reminder-list">
        {reminders.map(r => (
          <div className="reminder-item" key={r.id}>
            <div className="info">
              <h4>{r.title}</h4>
              <p>{r.time} • {r.category}</p>
            </div>
            <label className="switch">
              <input type="checkbox" defaultChecked={r.active} />
              <span className="switch-track"><span className="switch-thumb" /></span>
            </label>
          </div>
        ))}
      </div>
      <button className="fab" aria-label="Tambah Pengingat">+</button>
    </section>
  );
}

const reminders = [
  { id:1, title:'Obat Amoksisilin', time:'08:00 & 20:00', category:'Obat', active:true },
  { id:2, title:'Vitamin D3', time:'07:00', category:'Suplemen', active:true },
  { id:3, title:'Kontrol Dokter Umum', time:'12 Okt 09:30', category:'Kontrol', active:false }
];
