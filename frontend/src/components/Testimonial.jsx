import React from "react";
import r1 from "../images/review/review-1.jpg";
import r2 from "../images/review/review-2.jpg";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <div className="wrapper testimonial-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12 text-center pb-4">
              <h2 style={{ color: "white" }}>Testimonial</h2>
            </div>
            <div className="col-sm-12 col-lg-10">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="carousel-caption">
                      <img src={r1} alt="review" />
                      <p>"Feastify never disappoints! Every dish tastes fresh and flavorful. The packaging is clean, delivery is quick, and the food always feels restaurant-quality. Totally my go-to place for every craving!"</p>
                      <h5>Johnthan Doe - UX Designer</h5>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-caption">
                      <img src={r2} alt="review" />
                      <p>"Amazing taste and great portion sizes! I ordered the pasta and it was rich, creamy, and perfectly cooked. Their quality and service really stand out compared to other places."</p>
                      <h5>Maccy Doe - Front End</h5>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-caption">
                      <img src={r1} alt="review" />
                      <p>"The flavors are incredible! You can tell the ingredients are fresh and thoughtfully used. The desserts are a must-try — especially the chocolate lava cake. Highly recommended!"</p>
                      <h5>Johnthan Doe - UX Designer</h5>
                    </div>
                  </div>
                </div>
                {/* Controls if you want - optional */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
