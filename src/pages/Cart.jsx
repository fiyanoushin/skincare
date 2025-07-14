// import { useContext } from "react";
// import { StoreContext } from "../context/StoreContext";

// function Cart() {
//   const { cart, setCart } = useContext(StoreContext);

//   const removeFromCart = (id) => {
//     const updatedCart = cart.filter((item) => item.id !== id);
//     setCart(updatedCart);
//   };

//   const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

//   return (
//     <div className="cart-page">
//       <h2>Your Cart 🛒</h2>

//       {cart.length === 0 ? (
//         <p className="empty-message">Your cart is empty.</p>
//       ) : (
//         <>
//           <div className="cart-items">
//             {cart.map((item) => (
//               <div key={item.id} className="cart-item">
//                 <img src={item.image} alt={item.name} className="cart-image" />
//                 <div className="cart-info">
//                   <h4>{item.name}</h4>
//                   <p>₹{item.price}</p>
//                   <button
//                     className="remove-btn"
//                     onClick={() => removeFromCart(item.id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="cart-summary">
//             <h3>Total: ₹{totalPrice}</h3>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Cart;


import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, setCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

 const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);


  const increaseQuantity = (id) => {
  const updatedCart = cart.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  );
  setCart(updatedCart);
};

const decreaseQuantity = (id) => {
  const updatedCart = cart.map((item) =>
    item.id === id
      ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
      : item
  );
  setCart(updatedCart);
};

  return (
    <div className="cart-page">
      <h2>Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} width="100" />
                <div className="rmv">
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                  <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="total">
            <h3>Total: ₹{totalPrice}</h3>
            <button onClick={() => navigate("/checkout")}>Proceed to Payment</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
