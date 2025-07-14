import products from "../data/productData";
import ProductCard from "../components/cards/ProductCard";

function Shop() {
  return (
    <section className="shop-page">
      <h2 className="shop-heading">Shop All Products</h2>

      <div className="product-grid">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}

export default Shop;

