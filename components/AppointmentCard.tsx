interface AppointmentCardProps { facility: string; doctor: string; time: string; status?: string; }
export function AppointmentCard({ facility, doctor, time, status }: AppointmentCardProps) {
  return (
    <div className="card appointment-card">
      <strong>{doctor}</strong>
      <div style={{fontSize:'0.7rem', color:'var(--color-text-light)'}}>{facility}</div>
      <div style={{fontSize:'0.75rem', marginTop:4}}>{time}</div>
      {status && <span className="badge" style={{alignSelf:'flex-start', marginTop:4}}>{status}</span>}
    </div>
  );
}
