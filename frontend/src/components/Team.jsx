import React from "react";
import t1 from "../images/team/img-1.webp";
import t2 from "../images/team/img-2.webp";
import t3 from "../images/team/img-3.webp";

const Team = () => {
  return (
    <section id="team">
      <div className="team wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center pb-5">
              <h2 style={{ color: "white" }}>They will cook for you</h2>
            </div>

            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="card">
                <img src={t1} className="img-fluid" alt="team1" />
                <div className="team-caption py-4 px-2">
                  <h4>Chef Vikram Ahuja </h4>
                  <h6>Head-Chef</h6>
                  <p>With over 12 years of culinary experience, Chef Vikram brings authentic flavors and innovative techniques to every dish. His passion for quality makes every plate unforgettable.</p>
                  <div className="social-icon">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="card">
                <img src={t2} className="img-fluid" alt="team2" />
                <div className="team-caption py-4 px-2">
                  <h4>Chef Ananya Rao </h4>
                  <h6> Pastry & Dessert Specialist</h6>
                  <p>A master of sweet creations, Chef Ananya crafts desserts that blend elegance with rich, comforting flavors. Her signature treats are a customer favorite.</p>
                  <div className="social-icon">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="card">
                <img src={t3} className="img-fluid" alt="team3" />
                <div className="team-caption py-4 px-2">
                  <h4>Chef Rohan Malik </h4>
                  <h6> Continental Cuisine Expert</h6>
                  <p>Known for his bold flavors and handcrafted recipes, Chef Rohan specializes in continental dishes that combine tradition with modern flair.
Every recipe reflects his passion..</p>
                  <div className="social-icon">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
