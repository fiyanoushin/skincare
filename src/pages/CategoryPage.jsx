import { useParams, Link } from "react-router-dom";
import products from "../data/productData";


import stickImg from "../assets/images/stick.jpg";
import foundationImg from "../assets/images/foundation.jpg";
import eyeImg from "../assets/images/eye.jpg";
import blushImg from "../assets/images/blush.jpg";
import serumImg from "../assets/images/serum.jpg";
import sunscreenImg from "../assets/images/sunscreen.jpg";
import facewashImg from "../assets/images/facewash.jpg";
import concealerImg from "../assets/images/concealer.jpg";
import hairoilImg from "../assets/images/hairoil.jpg";
import shampooImg from "../assets/images/shampoo.jpg";
import hairmaskImg from "../assets/images/hairmask.jpg";
import bathgelImg from "../assets/images/bathgel.jpg";
import bodylotionImg from "../assets/images/bodylotion.jpg";
import perfumeImg from "../assets/images/perfume.jpg";


const subcategoryImages = {
  Lipstick: stickImg,
  Foundation: foundationImg,
  "Eye Makeup": eyeImg,
  Blush: blushImg,
  Serum: serumImg,
  Sunscreen: sunscreenImg,
  "Face Wash": facewashImg,
  Concealer: concealerImg,
  "Hair Oil": hairoilImg,
  Shampoo: shampooImg,
  "Hair Mask": hairmaskImg,
  "Bath Gel": bathgelImg,
  "Body Lotion": bodylotionImg,
  Perfume: perfumeImg,
};

function CategoryPage() {
  const { categoryName } = useParams();
  const normalized = categoryName.toLowerCase().replace(/\s+/g, "").replace("&", "");

  const subcategories = [
    ...new Set(
      products
        .filter(
          (item) =>
            item.category.toLowerCase().replace(/\s+/g, "").replace("&", "") === normalized
        )
        .map((item) => item.subcategory)
    ),
  ];

  return (
    <section className="category-subpage">
      <h2 style={{ textAlign: "center" }}>{categoryName} Subcategories</h2>
      <div className="subcategory-grid">
        {subcategories.map((sub) => (
          <Link
            to={`/subcategory/${sub.toLowerCase().replace(/\s+/g, "")}`}
            key={sub}
            className="subcategory-card"
          >
            <img
              src={subcategoryImages[sub]}
              alt={sub}
              className="subcategory-img"
            />
            <div className="subcategory-label">{sub}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryPage;
