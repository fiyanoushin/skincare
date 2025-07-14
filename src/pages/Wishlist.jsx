import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

function Wishlist() {
  const { wishlist, setWishlist } = useContext(StoreContext);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
  };

  return (
    <section className="wishlist-page">
      <div className="wishlist-container">
        <h2>Your Wishlist ❤️</h2>

        {wishlist.length === 0 ? (
          <p className="empty-message">Your wishlist is empty.</p>
        ) : (
          <ul className="wishlist-grid">
            {wishlist.map((item) => (
              <li key={item.id} className="wishlist-item">
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                  <button className="remove-btn" onClick={() => removeFromWishlist(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Wishlist;
