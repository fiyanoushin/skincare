// import { useContext } from "react";
// import { StoreContext } from "../../context/StoreContext";
// import { Link } from "react-router-dom";

// function ProductCard({ product }) {
//   const { cart, setCart, wishlist, setWishlist } = useContext(StoreContext);

//   const isInCart = cart.find((item) => item.id === product.id);
//   const isInWishlist = wishlist.find((item) => item.id === product.id);

 
//   const addToCart = () => {
//   const isAlready = cart.find((item) => item.id === product.id);

//   if (isAlready) {
//     const updatedCart = cart.map((item) =>
//       item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     setCart(updatedCart);
//   } else {
//     setCart([...cart, { ...product, quantity: 1 }]);
//   }
// };

//   const removeFromCart = () => {
//     setCart(cart.filter((item) => item.id !== product.id));
//   };

//   const toggleWishlist = () => {
//     if (isInWishlist) {
//       setWishlist(wishlist.filter((item) => item.id !== product.id));
//     } else {
//       setWishlist([...wishlist, product]);
//     }
//   };

//   return (
//     <div className="product-card">
//       <Link to={`/product/${product.id}`}>
//         <img src={product.image} alt={product.name} width="150" height="150" />
//         <h3>{product.name}</h3>
//       </Link>
//       <p>₹{product.price}</p>

//       {!isInCart ? (
//         <button onClick={addToCart}>Add to Cart 🛒</button>
//       ) : (
//         <button onClick={removeFromCart}>Remove from Cart ❌</button>
//       )}

//       <button onClick={toggleWishlist}>
//         {isInWishlist ? "❤️ Remove from Wishlist" : "🤍 Add to Wishlist"}
//       </button>
//     </div>
//   );
// }

// export default ProductCard;


// ✅ ProductCard.jsx (Modified)

// import { useContext } from "react";
// import { StoreContext } from "../../context/StoreContext";
// import { Link } from "react-router-dom";

// function ProductCard({ product }) {
//   const { cart, setCart, wishlist, setWishlist } = useContext(StoreContext);

//   const isInCart = cart.some((item) => item.id === product.id);
//   const isInWishlist = wishlist.some((item) => item.id === product.id);

//   const toggleCart = () => {
//     if (isInCart) {
//       setCart(cart.filter((item) => item.id !== product.id));
//     } else {
//       setCart([...cart, product]);
//     }
//   };

//   const toggleWishlist = () => {
//     if (isInWishlist) {
//       setWishlist(wishlist.filter((item) => item.id !== product.id));
//     } else {
//       setWishlist([...wishlist, product]);
//     }
//   };

//   return (
//     <div className="product-card">
//       <Link to={`/product/${product.id}`}>
//         <img src={product.image} alt={product.name} width="150" height="150" />
//         <h3>{product.name}</h3>
//       </Link>
//       <p>₹{product.price}</p>
//       <button onClick={toggleCart}>{isInCart ? "Remove from Cart" : "Add to Cart"}</button>
//       <button onClick={toggleWishlist}>{isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}</button>
//     </div>
//   );
// }

// export default ProductCard;

// import { useContext } from "react";
// import { StoreContext } from "../../context/StoreContext";
// import { Link } from "react-router-dom";

// function ProductCard({ product }) {
//   const { cart, setCart, wishlist, setWishlist } = useContext(StoreContext);

//   const isInCart = cart.find((item) => item.id === product.id);
//   const isInWishlist = wishlist.find((item) => item.id === product.id);

//   const toggleCart = () => {
//     if (isInCart) {
//       setCart(cart.filter((item) => item.id !== product.id));
//     } else {
//       setCart([...cart, product]);
//     }
//   };

//   const toggleWishlist = () => {
//     if (isInWishlist) {
//       setWishlist(wishlist.filter((item) => item.id !== product.id));
//     } else {
//       setWishlist([...wishlist, product]);
//     }
//   };



//   return (
//     <div className="product-card">
//       <Link to={`/product/${product.id}`}>
//         <img src={product.image} alt={product.name} width="150" height="150" />
//         <h3>{product.name}</h3>
//       </Link>
//       <p>₹{product.price}</p>
      
//       <button onClick={toggleCart}>
//         {isInCart ? "Remove from Cart" : "Add to Cart"}
//       </button>

//       <button onClick={toggleWishlist}>
//         {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
//       </button>
//     </div>
//   );
// }

// export default ProductCard;



// import { useContext } from "react";
// import { StoreContext } from "../../context/StoreContext";
// import { Link } from "react-router-dom";

// function ProductCard({ product }) {
//   const { cart, setCart, wishlist, setWishlist } = useContext(StoreContext);

//   const isInCart = cart.some((item) => item.id === product.id);
//   const isInWishlist = wishlist.some((item) => item.id === product.id);

//   const addToCart = () => {
//     const existing = cart.find((item) => item.id === product.id);

//     if (existing) {
//       const updatedCart = cart.map((item) =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       setCart(updatedCart);
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = () => {
//     setCart(cart.filter((item) => item.id !== product.id));
//   };

//   const toggleWishlist = () => {
//     if (isInWishlist) {
//       setWishlist(wishlist.filter((item) => item.id !== product.id));
//     } else {
//       setWishlist([...wishlist, product]);
//     }
//   };

//   return (
//     <div className="product-card">
//       <Link to={`/product/${product.id}`} className="product-link">
//         <img src={product.image} alt={product.name} width="160" height="160" />
//         <h3>{product.name}</h3>
//       </Link>

//       <p>₹{product.price}</p>

//       {!isInCart ? (
//         <button onClick={addToCart}>Add to Cart 🛒</button>
//       ) : (
//         <button onClick={removeFromCart}>Remove from Cart ❌</button>
//       )}

//       <button onClick={toggleWishlist}>
//         {isInWishlist ? "❤️ Remove from Wishlist" : "🤍 Add to Wishlist"}
//       </button>
//     </div>
//   );
// }

// export default ProductCard;

import { Link } from "react-router-dom";


function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <img src={product.image} alt={product.name} width="160" height="160" />
        <h3>{product.name}</h3>
      </Link>
    </div>
  );
}

export default ProductCard;

