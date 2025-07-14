import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Navbar from "./components/layouts/Navbar";
import { StoreProvider } from "./context/StoreContext";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const location = useLocation();

  const hideNavbarRoutes = ["/login", "/register"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <StoreProvider>
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path="/wishlist" element={<PrivateRoute><Wishlist /></PrivateRoute>} />
        <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
        <Route path="/orders" element={<PrivateRoute><Orders /></PrivateRoute>} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </StoreProvider>
  );
}

export default App;
