import data from './data/dashboardData.json'
import StatCard from './components/StatCard.jsx'
import SalesChart from './components/SalesChart.jsx'
import CategoryChart from './components/CategoryChart.jsx'
import OrdersTable from './components/OrdersTable.jsx'

export default function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">A</div>
          <span>Amplify</span>
        </div>
        <nav>
          <a className="nav-item active">Dashboard</a>
          <a className="nav-item">Orders</a>
          <a className="nav-item">Customers</a>
          <a className="nav-item">Products</a>
          <a className="nav-item">Analytics</a>
          <a className="nav-item">Settings</a>
        </nav>
        <div className="sidebar-footer">
          <div className="avatar">AN</div>
          <div>
            <div className="user-name">Anshul</div>
            <div className="user-role">Admin</div>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <h1>Dashboard</h1>
            <p className="subtitle">Welcome back, here's what's happening today.</p>
          </div>
          <div className="search">
            <input type="text" placeholder="Search..." />
          </div>
        </header>

        <section className="stats-grid">
          {data.stats.map((s) => (
            <StatCard key={s.id} stat={s} />
          ))}
        </section>

        <section className="charts-grid">
          <div className="card chart-card">
            <div className="card-header">
              <h2>Sales & Profit</h2>
              <span className="muted">Last 9 months</span>
            </div>
            <SalesChart data={data.salesTrend} />
          </div>
          <div className="card chart-card">
            <div className="card-header">
              <h2>Category Breakdown</h2>
              <span className="muted">Revenue share</span>
            </div>
            <CategoryChart data={data.categoryBreakdown} />
          </div>
        </section>

        <section className="card">
          <div className="card-header">
            <h2>Recent Orders</h2>
            <span className="muted">{data.recentOrders.length} orders</span>
          </div>
          <OrdersTable orders={data.recentOrders} />
        </section>

        <footer className="footer">
          Deployed on AWS Amplify · {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  )
}
