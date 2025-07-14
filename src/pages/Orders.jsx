function Orders() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const orders = currentUser?.orders || [];

  return (
    <section className="orders-page">
      <h2>Your Orders</h2>

      {orders.length === 0 ? (
        <p className="empty-msg">You have no orders yet.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="order-card">
            <p><strong>Order Date:</strong> {order.date}</p>
            <ul>
            {order.items.map((item) => (
           <li key={item.id}>
           {item.name} - ₹{item.price} x {item.quantity}
           </li>
            ))}
          </ul>
          <p>
         <strong>Total:</strong> ₹
         {order.items.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        </p>

            <hr />
          </div>
        ))
      )}
    </section>
  );
}

export default Orders;
