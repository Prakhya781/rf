import React from "react";
import { useNavigate } from "react-router-dom";
import img3 from "../images/img/img-3.jpg";
import img4 from "../images/img/img-4.jpg";
import img5 from "../images/img/img-5.jpg";

const ExploreFoods = () => {
  const navigate = useNavigate();

  return (
    <section id="explore-food">
      <div className="explore-food wrapper">
        <div className="container">
          
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 style={{ color: "white" }}>Explore Our Foods</h2>
              <p>
                Discover a world of flavors crafted to excite your senses.
                From comfort classics to chef-special creations, every dish is made
                with fresh ingredients and a passion for perfection.
              </p>
            </div>
          </div>

          <div className="row pt-5">

            {/* --- YOUR 3 CARDS --- */}

            <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
              <div className="card">
                <img src={img3} className="img-fluid" alt="food1" />
                <div className="p-4">
                  <h4>Rainbow Vegetable Burger</h4>
                  <p>Time: 15 - 20 Minutes | Serves: 1</p>
                  <span>$10.50 <del>$11.70</del></span>
                   <button 
              className="mt-4 main-btn view-menu-btn"
              onClick={() => navigate("/menu")}
            >
              Order Now
            </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
              <div className="card">
                <img src={img4} className="img-fluid" alt="food2" />
                <div className="p-4">
                  <h4>Vegetarian Food</h4>
                  <p>Time: 30 - 45 Minutes | Serves: 1</p>
                  <span>$9.20 <del>$10.50</del></span>
                   <button 
              className="mt-4 main-btn view-menu-btn"
              onClick={() => navigate("/menu")}
            >
              Order Now
            </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
              <div className="card">
                <img src={img5} className="img-fluid" alt="food3" />
                <div className="p-4">
                  <h4>Raspberry Stuffed French Food</h4>
                  <p>Time: 10 - 15 Minutes | Serves: 1</p>
                  <span>$12.50 <del>$13.20</del></span>
                   <button 
              className="mt-4 main-btn view-menu-btn"
              onClick={() => navigate("/menu")}
            >
              Order Now
            </button>
                </div>
              </div>
            </div>

          </div>

          {/* 🔥 NEW BUTTON for FULL MENU PAGE */}
          <div className="text-center mt-5">
            <button 
              className="main-btn view-menu-btn"
              onClick={() => navigate("/menu")}
            >
              View Full Menu →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExploreFoods;
