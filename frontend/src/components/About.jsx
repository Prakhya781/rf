import React from "react";
import { useNavigate } from "react-router-dom";

import aboutImg from "../images/img/img-1.png";

const About = () => {
  const navigate = useNavigate();
  return (
    
    <section id="about">
      <div className="about-section wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-lg-0 mb-5">
              <img src={aboutImg} className="img-fluid" alt="about" />
            </div>
            <div className="col-lg-6 col-md-12 ps-lg-5">
              <h2 style={{ color: "white" }}>We make everything by hand with the best possible ingredients.</h2>
              <p>
                At Feastify, we believe that food is more than just a meal — it’s an experience that brings comfort, joy, and connection.
Our mission is to serve dishes that blend freshness, authenticity, and rich flavors, creating a perfect balance between tradition and innovation.
Every plate we craft is a reflection of our passion for great food and our commitment to giving you the best.


              </p>

              <ul className="list-unstyled py-3">
                <li>We use carefully selected ingredients to ensure every dish is flavorful, aromatic, and made with purity in mind.</li>
                <li>Our chefs combine expertise and creativity to prepare meals that are delicious, wholesome, and memorable.</li>
                <li>Whether dining in or ordering online, we make sure every experience feels warm, satisfying, and truly delightful.</li>
              </ul>
              <button className="main-btn mt-4" onClick={() => navigate("/learn-more")}>
  Learn More
</button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
