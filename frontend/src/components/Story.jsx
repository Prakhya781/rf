import React from "react";
import { useNavigate } from "react-router-dom";

const Story = () => {
  const navigate = useNavigate();
  return (
    <section id="story">
      <div className="story-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="text-content">
                
                <p>
                  Every great recipe has a story — and so does Feastify.
What started as a small idea between food lovers soon grew into a passion for serving meals that feel comforting, authentic, and unforgettable.

We wanted to create a place where fresh ingredients meet honest cooking, and where every dish carries the warmth of home.
From our first recipe to the menu we serve today, our goal has always been simple:
to bring people together through delicious food.
                </p>
                 <button className="main-btn mt-4" onClick={() => navigate("/read-more")}>
  Read More
</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
