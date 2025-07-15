// import { Routes, Route, useLocation } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Shop from "./pages/Shop";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
// import Wishlist from "./pages/Wishlist";
// import Register from "./pages/Register";
// import Checkout from "./pages/Checkout";
// import Orders from "./pages/Orders";
// import Navbar from "./components/layouts/Navbar";
// import { StoreProvider } from "./context/StoreContext";
// import PrivateRoute from "./routes/PrivateRoute";
// import Categories from "./pages/Categories";
// import CategoryProducts from "./pages/CategoryProducts";



// function App() {
//   const location = useLocation();

//   const hideNavbarRoutes = ["/login", "/register"];
//   const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

//   return (
//     <StoreProvider>
//       {!shouldHideNavbar && <Navbar />}

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/product/:id" element={<ProductDetails />} />

//         <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
//         <Route path="/wishlist" element={<PrivateRoute><Wishlist /></PrivateRoute>} />
//         <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
//         <Route path="/orders" element={<PrivateRoute><Orders /></PrivateRoute>} />

//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/categories" element={<Categories />} />
//         <Route path="/category/:categoryName" element={<CategoryProducts />} />

//       </Routes>
//     </StoreProvider>
//   );
// }

// export default App;

import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Shop from "./pages/Shop"; // Main categories page (Makeup, Skincare, etc.)
import Categories from "./pages/Categories"; // Optional alias
import CategoryProducts from "./pages/CategoryPage"; // Shows subcategories (e.g., Lipstick, Foundation)
import SubcategoryPage from "./pages/SubcategoryPage"; // Shows actual products in a subcategory
import ProductDetails from "./pages/ProductDetails"; // Single product detail page

import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
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
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Shop Flow */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} /> {/* Optional or same as /shop */}
        <Route path="/category/:categoryName" element={<CategoryProducts />} />
        <Route path="/subcategory/:subcategoryName" element={<SubcategoryPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Protected Routes */}
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path="/wishlist" element={<PrivateRoute><Wishlist /></PrivateRoute>} />
        <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
        <Route path="/orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
      </Routes>
    </StoreProvider>
  );
}

export default App;
