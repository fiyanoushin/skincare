import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, setCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const allUsers = JSON.parse(localStorage.getItem("users")) || [];

  const handlePlaceOrder = () => {
  if (!cart.length) return;

  const newOrder = {
    id: Date.now(),
    items: cart.map(item => ({
      ...item,
      quantity: item.quantity || 1
    })),
    date: new Date().toLocaleString(),
  };

  const updatedUsers = allUsers.map((user) => {
    if (user.email === currentUser.email) {
      const updatedUser = {
        ...user,
        orders: [...(user.orders || []), newOrder],
      };
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      return updatedUser;
    }
    return user;
  });

  localStorage.setItem("users", JSON.stringify(updatedUsers));
  setCart([]);
  navigate("/orders");
};

 

  return (
   <div className="checkout-page">
  <h2>Checkout</h2>

  {cart.length === 0 ? (
    <p>Your cart is empty.</p>
  ) : (
    <>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{item.price} x {item.quantity}
          </li>
        ))}
      </ul>

      <p>Total: ₹{cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </>
  )}
</div>

  );
}

export default Checkout;
