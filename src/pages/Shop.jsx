import { Link } from "react-router-dom";

const categories = [
  { name: "Makeup", image: "/assets/images/makeup.jpg" },
  { name: "Skincare", image: "/assets/images/skincare.jpg" },
  { name: "Haircare", image: "/assets/images/haircare.jpg" },
  { name: "Bath & Body", image: "/assets/images/bath.jpg" },
  { name: "Fragrance", image: "/assets/images/fragrance.jpg" },
];

function formatCategoryRoute(name) {
  return name.toLowerCase().replace(/&/g, "").replace(/\s+/g, "");
}

function Shop() {
  return (
    <section className="shop-page">
      <h2 className="shop-heading">Shop by Category</h2>

      <div className="category-grid">
        {categories.map((cat) => (
          <Link
            to={`/category/${formatCategoryRoute(cat.name)}`}
            key={cat.name}
            className="category-card"
          >
            <div className="category-image-container">
              <img
                src={cat.image}
                alt={cat.name}
                className="category-image"
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/200x200?text=No+Image")
                }
              />
            </div>
            <h3 className="category-name">{cat.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Shop;

