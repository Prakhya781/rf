import React from "react";
import { useNavigate } from "react-router-dom";
import craftImg from '../images/app/craft.png';
import experienceImg from '../images/app/experience.png';
import culinaryImg from '../images/app/culinary.png';
import freshImg from '../images/app/fresh.png';
import passionImg from '../images/app/passion.png';
import ingredientsImg from '../images/app/ingredients.png';
import innovationImg from '../images/app/innovation.png';
import "./LearnMore.css";

const LearnMore = () => {
  const navigate = useNavigate();

  return (
    <div className="lm-container">
      {/* CLOSE BUTTON */}
      <button className="lm-close" onClick={() => navigate(-1)}>✕</button>

      {/* MAIN INTRO SECTION */}
      <div className="lm-intro">
        <h1>Crafted With Love, Served With Passion</h1>
        <p>
          At Feastify, we take pride in transforming fresh ingredients into
          extraordinary dining experiences. Every dish is handcrafted by our
          chefs, blending tradition with innovation, flavors with presentation,
          and nutrition with indulgence.
        </p>
        <p>
          Our culinary philosophy emphasizes quality and creativity. From
          sourcing the finest ingredients to presenting each plate with care,
          every step is meticulously curated to ensure you enjoy a meal that
          delights the senses and leaves lasting memories.
        </p>
        <p>
          Beyond food, we aim to create experiences—comforting, inspiring, and
          uniquely memorable. Whether it’s a family dinner, a celebration, or
          a solo indulgence, Feastify is where freshness meets excellence.
        </p>
      </div>

      {/* IMAGE CARD SECTION */}
      <div className="lm-grid">
        <div className="lm-card"><img src={craftImg} alt="Craft" /></div>
        <div className="lm-card"><img src={experienceImg} alt="Experience" /></div>
        <div className="lm-card"><img src={freshImg} alt="Flavors" /></div>
        <div className="lm-card"><img src={culinaryImg} alt="Masters" /></div>
        <div className="lm-card"><img src={passionImg} alt="Passion" /></div>
        <div className="lm-card"><img src={ingredientsImg} alt="Ingredients" /></div>
        <div className="lm-card"><img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" alt="Moment" /></div>
        <div className="lm-card"><img src={innovationImg} alt="Innovation" /></div>
      </div>

      {/* THEORETICAL / CONTENT SECTION */}
      <div className="lm-content-section" style={{ maxWidth: "850px", margin: "50px auto 30px", color: "#fff", lineHeight: "1.6rem", padding: "0 10px" }}>
        <h2>Our Culinary Philosophy</h2>
        <p>
          Every dish we serve at Feastify tells a story. Our chefs are committed
          to sourcing the finest ingredients and combining them with techniques
          that respect both tradition and innovation. From fresh herbs and
          spices to premium meats and produce, each element is chosen to
          enhance flavor, aroma, and nutrition.
        </p>
        <p>
          We believe dining is an experience, not just a meal. Our goal is to
          create memorable moments for our guests—whether it's a family
          celebration, a quiet dinner at home, or a special occasion with
          friends. The way we plate, season, and present every dish reflects
          our attention to detail and dedication to excellence.
        </p>
        <p>
          Creativity is at the heart of what we do. Our menu combines classic
          recipes with modern culinary twists, delivering a balance of flavors
          that excite the palate while remaining comforting and familiar.
          Each dish is designed to delight visually and gastronomically.
        </p>
        <p>
          Passion drives every step in our kitchen—from the careful selection
          of ingredients to the final touch of garnish. We ensure that our
          guests enjoy meals that are flavorful, wholesome, and memorable,
          with a warm and inviting experience that lingers long after the last
          bite.
        </p>
      </div>

      {/* ORDER BUTTON */}
      <div className="lm-btn-wrapper">
        <button className="lm-order-btn" onClick={() => navigate("/menu")}>
          ORDER NOW
        </button>
      </div>
    </div>
  );
};

export default LearnMore;
