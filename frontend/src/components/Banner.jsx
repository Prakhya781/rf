import React from "react";

import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section id="home">
      <div className="top-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 style={{ color: "white" }}>Our Restaurant Offers Delicious & Seafood</h1>
              <p>
                Where flavors meet finesse and every dish is a masterpiece.
Our chefs prepare each meal with precision, passion, and premium ingredients.
Indulge in a dining experience that leaves a lasting impression.
              </p>
               <button 
              className="mt-4 main-btn view-menu-btn"
              onClick={() => navigate("/menu")}
            >
              Order Now<i className="fas fa-shopping-basket ps-3"></i>
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
