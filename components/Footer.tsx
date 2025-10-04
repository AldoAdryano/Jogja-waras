export function Footer() {
  return (
    <footer>
      <div className="cols container">
        <div>
          <strong>Jogja Waras</strong>
          <p style={{marginTop:4}}>Platform layanan kesehatan terpadu.</p>
        </div>
        <div>
          <h4>Fitur</h4>
          <ul style={{listStyle:'none', padding:0, margin:0}}>
            <li>Direktori Faskes</li>
            <li>Booking</li>
            <li>Telekonsultasi</li>
            <li>Rekam Medis</li>
            <li>Pengingat</li>
            <li>Edukasi</li>
          </ul>
        </div>
        <div>
          <h4>Dukungan</h4>
          <ul style={{listStyle:'none', padding:0, margin:0}}>
            <li>FAQ</li>
            <li>Kontak</li>
            <li>Kebijakan Privasi</li>
          </ul>
        </div>
      </div>
      <div className="container">© {new Date().getFullYear()} Jogja Waras</div>
    </footer>
  );
}
