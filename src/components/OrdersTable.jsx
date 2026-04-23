export default function OrdersTable({ orders }) {
  const statusClass = (s) => {
    if (s === 'Completed') return 'badge badge-success'
    if (s === 'Pending') return 'badge badge-warning'
    if (s === 'Refunded') return 'badge badge-danger'
    return 'badge'
  }

  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td className="mono">{o.id}</td>
              <td>{o.customer}</td>
              <td>{o.amount}</td>
              <td>
                <span className={statusClass(o.status)}>{o.status}</span>
              </td>
              <td className="muted">{o.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
