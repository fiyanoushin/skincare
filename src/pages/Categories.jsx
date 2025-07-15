// src/pages/Categories.jsx
import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    {
      name: "Makeup",
      image: "/assets/images/categories/makeup.jpg",
    },
    {
      name: "Skincare",
      image: "/assets/images/categories/skincare.jpg",
    },
    {
      name: "Haircare",
      image: "/assets/images/categories/haircare.jpg",
    },
    {
      name: "Bath & Body",
      image: "/assets/images/categories/bathbody.jpg",
    },
    {
      name: "Fragrance",
      image: "/assets/images/categories/fragrance.jpg",
    },
  ];

  return (
    <section className="categories-page">
      <h2>Shop by Category</h2>
      <div className="category-list">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/category/${category.name.toLowerCase().replace(/\s+/g, "")}`}
            className="category-card"
          >
            <img src={category.image} alt={category.name} className="category-image" />
            <h3>{category.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;

