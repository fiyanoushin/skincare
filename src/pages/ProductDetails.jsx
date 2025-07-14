import { useParams } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import products from "../data/productData.js";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  const { cart, setCart, wishlist, setWishlist } = useContext(StoreContext);

  const addToCart = () => {
    const isAlready = cart.find((item) => item.id === product.id);
    if (!isAlready) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const addToWishlist = () => {
    const isAlready = wishlist.find((item) => item.id === product.id);
    if (!isAlready) {
      setWishlist([...wishlist, product]);
    }
  };

  if (!product) return <p>Product not found.</p>;

  return (
    <section className="product-detail">
      <div className="product-detail-container">
        <img className="detail-img" src={product.image} alt={product.name} />
        <div className="detail-content">
          <h2>{product.name}</h2>
          <p className="price">₹{product.price}</p>
          <p className="desc">
            🌿 A premium skincare product designed to keep your skin healthy,
            glowing, and hydrated.
          </p>
          <div className="btn-group">
            <button className="btn btn-cart" onClick={addToCart}>
              Add to Cart
            </button>
            <button className="btn btn-wishlist" onClick={addToWishlist}>
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
