export default function StatCard({ stat }) {
  const trendClass = stat.trend === 'up' ? 'trend-up' : 'trend-down'
  const arrow = stat.trend === 'up' ? '▲' : '▼'
  return (
    <div className="card stat-card">
      <div className="stat-label">{stat.label}</div>
      <div className="stat-value">{stat.value}</div>
      <div className={`stat-change ${trendClass}`}>
        <span>{arrow}</span> {stat.change}
      </div>
    </div>
  )
}
