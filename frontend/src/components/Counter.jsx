import React, { useEffect } from "react";
import img1 from "../images/counter/img-1.webp";
import img2 from "../images/counter/img-2.webp";
import img3 from "../images/counter/img-3.webp";
import img4 from "../images/counter/img-4.webp";

const Counter = () => {
  useEffect(() => {
    function counter(id, start, end, duration) {
      const obj = document.getElementById(id);
      if (!obj) return;
      let current = start;
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const step = Math.abs(Math.floor(duration / (range || 1)));
      const timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current === end) clearInterval(timer);
      }, step);
    }

    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
  }, []);

  return (
    <section id="counter">
      <div className="counter-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-sm-6 mb-md-0 mb-4">
              <img src={img1} className="img-fluid mb-3" alt="c1" />
              <h2>
                <span id="count1"></span>+
              </h2>
              <p>SAVINGS</p>
            </div>

            <div className="col-md-3 col-sm-6 mb-md-0 mb-4">
              <img src={img2} className="img-fluid mb-3" alt="c2" />
              <h2>
                <span id="count2"></span>+
              </h2>
              <p>PHOTOS</p>
            </div>

            <div className="col-md-3 col-sm-6 mb-md-0 mb-4">
              <img src={img3} className="img-fluid mb-3" alt="c3" />
              <h2>
                <span id="count3"></span>+
              </h2>
              <p>ROCKETS</p>
            </div>

            <div className="col-md-3 col-sm-6 mb-md-0 mb-4">
              <img src={img4} className="img-fluid mb-3" alt="c4" />
              <h2>
                <span id="count4"></span>+
              </h2>
              <p>GLOBES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
