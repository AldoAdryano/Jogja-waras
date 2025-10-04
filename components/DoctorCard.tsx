interface DoctorCardProps { name: string; specialty: string; tags?: string[]; availability?: string; size?: 'default' | 'compact'; }
export function DoctorCard({ name, specialty, tags = [], availability = 'Tersedia', size='default' }: DoctorCardProps) {
  const compact = size === 'compact';
  return (
    <div className="card doctor-card" style={{
      padding: compact ? '12px 12px 10px' : '18px 18px 16px',
      border:'1px solid var(--color-outline)',
      flexDirection:'row',
      alignItems: compact ? 'center':'flex-start',
      gap: compact ? 12 : 18
    }}>
      <div className="doctor-avatar" aria-hidden style={{
        width: compact ? 44 : 54,
        height: compact ? 44 : 54,
        fontSize: compact ? '.85rem' : '1.1rem',
        borderRadius: compact ? 14 : 18
      }}>
        {name.split(" ").filter(Boolean).slice(0,2).map(w => w.charAt(0)).join('')}
      </div>
      <div style={{flex:1, display:'flex', flexDirection:'column', gap: compact ? 2 : 4}}>
        <div style={{display:'flex', alignItems:'center', gap:8, flexWrap:'wrap'}}>
          <strong style={{fontSize: compact ? '.75rem' : '0.9rem'}}>{name}</strong>
          <span style={{fontSize:'0.5rem', background:'rgba(108,214,100,0.15)', color:'var(--color-primary)', padding: compact ? '3px 6px':'4px 8px', borderRadius:24, letterSpacing:'.5px', fontWeight:600}}>{availability}</span>
        </div>
        <div style={{fontSize: compact ? '.55rem':'0.7rem', color:'var(--color-text-light)', display:'flex', alignItems:'center', gap:4}}>
          <span role="img" aria-label="specialty">🎗️</span>{specialty}
        </div>
        {tags.length > 0 && (
          <div className="tag-row" style={{marginTop: compact ? 0 : 2}}>
            {tags.map(t => <span key={t} className="tag" style={{fontSize: compact ? '.45rem': undefined}}>{t}</span>)}
          </div>
        )}
      </div>
    </div>
  );
}
