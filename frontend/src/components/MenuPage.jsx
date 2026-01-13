import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuPage = () => {
  const navigate = useNavigate();

  const [menu, setMenu] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [activeCat, setActiveCat] = useState("All");
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Fetch menu
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch("https://rf-1-backend.onrender.com/api/menu");
        const data = await res.json();
        setMenu(data);
        setFiltered(data);
        const uniqueCats = ["All", ...new Set(data.map((i) => i.category))];
        setCategories(uniqueCats);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Persist cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const filterByCategory = (cat) => {
    setActiveCat(cat);
    if (cat === "All") setFiltered(menu);
    else setFiltered(menu.filter((item) => item.category === cat));
  };

  const addToCart = (item) => {
    if (!cart.find((c) => c._id === item._id)) {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((c) => c._id !== id));
  };

  const isInCart = (id) => cart.some((c) => c._id === id);

  // ⭐⭐⭐ ORDER NOW FUNCTION ⭐⭐⭐
  const placeOrder = async () => {
    if (cart.length === 0) {
      alert("Please add items to cart first!");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user?.id) {
      alert("Please log in first!");
      navigate("/login");
      return;
    }

    const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

    try {
      const res = await fetch("https://rf-1-backend.onrender.com/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          items: cart.map((i) => ({
            itemId: i._id,
            name: i.name,
            price: i.price,
            qty: i.qty,
          })),
          total,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("🎉 Order placed successfully!");
        setCart([]);
        localStorage.removeItem("cart");
        setShowCart(false);
      } else {
        alert(data.error || "Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Try again.");
    }
  };

  if (loading) return <p className="text-center mt-5">Loading menu...</p>;

  return (
    <>
      {/* 🔙 BACK BUTTON */}
      <button
        onClick={() => navigate("/")}
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          background: "black",
          color: "white",
          padding: "8px 12px",
          borderRadius: "6px",
          border: "none",
          zIndex: 2000,
          cursor: "pointer",
        }}
      >
        ❌ Back
      </button>

      {/* 🛒 OPEN CART BUTTON */}
      <button
        className="main-btn"
        style={{
          position: "fixed",
          top: "80px",
          right: "20px",
          zIndex: 1000,
        }}
        onClick={() => setShowCart(true)}
      >
        🛒 Cart ({cart.length})
      </button>

      {/* 🛒 CART SIDEBAR */}
      {showCart && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "350px",
            height: "100vh",
            background: "#fff",
            padding: "15px",
            overflowY: "auto",
            zIndex: 2000,
            boxShadow: "-3px 0 6px rgba(0,0,0,0.2)",
          }}
        >
          <button
            style={{
              width: "100%",
              marginBottom: "15px",
              backgroundColor: "black",
              color: "white",
              padding: "8px 12px",
              borderRadius: "6px",
            }}
            onClick={() => setShowCart(false)}
          >
            ❌ Close Cart
          </button>

          <h3>My Cart</h3>

          {cart.length === 0 && <p>No items added yet</p>}

          {cart.map((item) => (
            <div key={item._id} style={{ marginBottom: "12px", borderBottom: "1px solid #ddd" }}>
              <strong>{item.name}</strong>
              <p>${item.price.toFixed(2)}</p>

              <button
                style={{ background: "red", color: "white", padding: "6px 10px", borderRadius: "6px" }}
                onClick={() => removeFromCart(item._id)}
              >
                Remove
              </button>
            </div>
          ))}

          {cart.length > 0 && (
            <button
              className="main-btn"
              style={{ width: "100%", marginTop: "20px", padding: "10px" }}
              onClick={placeOrder}
            >
              🚀 Order Now
            </button>
          )}
        </div>
      )}

      {/* MENU SECTION */}
      <section id="menu" className="menu-page wrapper">
        <div className="container">
          <h1 className="text-center mb-4">Our Full Menu</h1>

          <div className="category-bar mb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-btn ${cat === activeCat ? "active" : ""}`}
                onClick={() => filterByCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="row">
            {filtered.map((item) => (
              <div className="col-lg-4 col-md-6 mb-5" key={item._id}>
                <div className="card menu-card">
                  <img src={item.image} alt={item.name} className="img-fluid menu-img" />
                  <div className="p-4">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <span className="price">${item.price.toFixed(2)}</span>

                    {!isInCart(item._id) ? (
                      <button className="main-btn mt-3" onClick={() => addToCart(item)}>
                        Add to Cart
                      </button>
                    ) : (
                      <button
                        className="main-btn mt-3"
                        style={{ background: "red" }}
                        onClick={() => removeFromCart(item._id)}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default MenuPage;
