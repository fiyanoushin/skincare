// import { useContext } from "react";
// import { StoreContext } from "../../context/StoreContext";
// import { Link, useNavigate } from "react-router-dom";

// function Navbar() {
//   const { cart, wishlist } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const currentUser = JSON.parse(localStorage.getItem("currentUser"));

//   const handleLogout = () => {
//     localStorage.removeItem("currentUser");
//     navigate("/login");
//   };

//   return (
//     <nav>
//       <div className="logo">
//         <Link to="/"><i>Dewélla</i></Link>
//       </div>
//       <ul>
//         <li><Link to="/shop">Shop🛍️</Link></li>
//        <li><Link to="/wishlist">Wishlist❤️</Link></li>
//        <li><Link to="/cart">Cart🛒</Link></li>


//         {currentUser ? (
//           <>
//             <li><button onClick={handleLogout}>Logout</button></li>
//           </>
//         ) : (
//           <li><Link to="/login">Login</Link></li>
//         )}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link, useNavigate } from "react-router-dom";


function Navbar() {
  const { cart, wishlist } = useContext(StoreContext);
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Dewélla</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/shop">Shop 🛍️</Link></li>

        <li className="icon-badge">
          <Link to="/wishlist">Wishlist ❤️</Link>
          {wishlist.length > 0 && (
            <span className="badge">{wishlist.length}</span>
          )}
        </li>

        <li className="icon-badge">
          <Link to="/cart">Cart 🛒</Link>
          {cart.length > 0 && (
            <span className="badge">{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
          )}
        </li>

        {currentUser ? (
          <>
            <li className="user-greet">Hi, {currentUser.name}</li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">🔐 Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
