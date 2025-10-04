interface StatCardProps { label: string; value: string | number; trend?: string; trendType?: 'up' | 'down'; }
export function StatCard({ label, value, trend, trendType }: StatCardProps) {
  return (
    <div className="stat-card">
      <h4>{label}</h4>
      <div className="value">{value}</div>
      {trend && <div className={`trend ${trendType}`}>{trend}</div>}
    </div>
  );
}
