export default function AdminDashboardPage() {
  return (
    <section>
      <h1>Admin Dashboard</h1>
      <p>Ringkasan operasional platform.</p>
      <div className="stat-grid">
        <div className="stat-card">
          <h4>User Aktif</h4>
          <div className="value">1.204</div>
          <div className="trend up">+4.2%</div>
        </div>
        <div className="stat-card">
          <h4>Kunjungan Hari Ini</h4>
          <div className="value">312</div>
          <div className="trend up">+2.1%</div>
        </div>
        <div className="stat-card">
          <h4>Telekonsultasi Aktif</h4>
          <div className="value">24</div>
          <div className="trend down">-1.2%</div>
        </div>
        <div className="stat-card">
          <h4>Antrean Booking</h4>
          <div className="value">87</div>
          <div className="trend up">+6.0%</div>
        </div>
      </div>
      <div className="grid two" style={{marginTop:'var(--space-6)'}}>
        <div className="card">
          <h3>Aktivitas Terbaru</h3>
          <table className="table">
            <thead>
              <tr><th>Waktu</th><th>Aktivitas</th></tr>
            </thead>
            <tbody>
              <tr><td>08:12</td><td>User baru mendaftar</td></tr>
              <tr><td>08:30</td><td>Booking dibuat</td></tr>
              <tr><td>08:41</td><td>Telekonsultasi dimulai</td></tr>
              <tr><td>09:05</td><td>Resep diterbitkan</td></tr>
            </tbody>
          </table>
        </div>
        <div className="card">
          <h3>Penggunaan Kapasitas</h3>
          <p>Placeholder grafik (CPU, DB, FHIR API).</p>
        </div>
      </div>
    </section>
  );
}
