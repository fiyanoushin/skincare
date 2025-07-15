import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/productData";
import ProductCard from "../components/cards/ProductCard";

function SubcategoryPage() {
  const { subcategoryName } = useParams();
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");

  useEffect(() => window.scrollTo(0, 0), []);

  const filteredBySubcategory = products.filter(
    (item) =>
      item.subcategory.toLowerCase().replace(/\s+/g, "") ===
      subcategoryName.toLowerCase().replace(/\s+/g, "")
  );

  const brands = [...new Set(filteredBySubcategory.map((p) => p.brand))];

  const finalProducts = filteredBySubcategory.filter((item) => {
    const matchesBrand = selectedBrand === "All" || item.brand === selectedBrand;
    const matchesPrice =
      selectedPriceRange === "All" ||
      (selectedPriceRange === "<500" && item.price < 500) ||
      (selectedPriceRange === "500-1000" && item.price >= 500 && item.price <= 1000) ||
      (selectedPriceRange === ">1000" && item.price > 1000);

    return matchesBrand && matchesPrice;
  });

  return (
    <section className="subcategory-products-page">
      <div className="filters" style={{ marginBottom: "20px", textAlign: "center" }}>
        <label style={{ marginRight: "20px" }}>
          Filter by Brand:{" "}
          <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
            <option value="All">All Brands</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </label>

        <label>
          Filter by Price:{" "}
          <select value={selectedPriceRange} onChange={(e) => setSelectedPriceRange(e.target.value)}>
            <option value="All">All</option>
            <option value="<500">Less than ₹500</option>
            <option value="500-1000">₹500 - ₹1000</option>
            <option value=">1000">More than ₹1000</option>
          </select>
        </label>
      </div>

      <div className="product-results">
        <h2 style={{ textAlign: "center" }}>
          {subcategoryName.charAt(0).toUpperCase() + subcategoryName.slice(1)} Products
        </h2>

        {finalProducts.length === 0 ? (
          <p style={{ textAlign: "center" }}>No products match your filters.</p>
        ) : (
          <div className="product-grid">
            {finalProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default SubcategoryPage;
