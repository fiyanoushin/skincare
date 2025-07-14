import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Glow Naturally with <span className="brand-name">Dewélla</span></h1>
          <p>Shop the best skincare and beauty products online</p>
          <Link to="/shop">
            <button className="shop-now-btn">Shop Now</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
