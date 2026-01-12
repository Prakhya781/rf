import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StorySection.css";

const StorySection = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="lm-container">
      {/* CLOSE BUTTON */}
      <button className="lm-close" onClick={() => navigate(-1)}>✕</button>

      {/* INTRO */}
      <div className="lm-intro">
        <h1>Every Great Recipe Has a Story</h1>
        <p>
          What started as a small idea between food lovers soon grew into a passion for
          serving meals that feel comforting, authentic, and unforgettable.
        </p>
        <p>
          We wanted to create a place where fresh ingredients meet honest cooking,
          and where every dish carries the warmth of home.
        </p>
      </div>

      

      {/* STORY CONTENT */}
      <div className={`story-section ${showMore ? "expanded" : ""}`}>
        <p>
          From our first recipe to the menu we serve today, our goal has always been simple:
          to bring people together through delicious food. Each dish is a reflection of care,
          creativity, and a commitment to flavor.
        </p>
        <p>
          Our chefs combine traditional techniques with modern innovations to create meals
          that are both comforting and exciting. From selecting the finest ingredients to
          plating each dish with attention to detail, we ensure every moment at Feastify
          feels special.
        </p>
        
        {/* Extra content toggled */}
        {showMore && (
          <>
            <p>
              Passion drives everything we do. Every ingredient, preparation, and garnish
              is infused with care. Our seasonal menus are crafted to bring out the best
              in every flavor, while honoring local and organic produce wherever possible.
            </p>
            <p>
              Dining is more than just food; it’s an experience. We curate moments for
              families, friends, and solo diners alike. From the aroma that greets you
              at the door to the flavors on your plate, everything is designed to delight
              the senses and leave a lasting memory.
            </p>
            <p>
              Innovation is at our core. We explore unique flavor combinations, reinterpret
              classic dishes, and constantly evolve to bring fresh experiences to our guests.
              Creativity doesn’t compromise authenticity—it enhances it.
            </p>
            
          </>
        )}
      </div>

      {/* READ MORE / LESS BUTTON */}
      <div className="lm-btn-wrapper">
        <button className="lm-order-btn" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>

      {/* ORDER NOW BUTTON */}
      <div className="lm-btn-wrapper">
        <button className="lm-order-btn" onClick={() => navigate("/menu")}>
          ORDER NOW
        </button>
      </div>
    </div>
  );
};

export default StorySection;
