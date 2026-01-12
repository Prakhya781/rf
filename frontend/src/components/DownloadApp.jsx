import React from "react";
import phones from "../images/app/phones.png";
import app1 from "../images/app/1.svg";
import app2 from "../images/app/2.svg";

const DownloadApp = () => {
  return (
    <section id="download-app">
      <div className="download-app wrapper">
        <div className="container">
          <div className="row align-items-center">

            {/* LEFT SIDE */}
            <div className="col-md-6 mb-4 order-2 order-lg-1">
              <div className="text-content">
                <h1 className="mb-3" style={{ color: "white" }} >Download our mobile app.</h1>
                <p>
                  Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.
                </p>

                {/* Download Buttons */}
                <div className="d-flex flex-wrap mt-4">

                  <button
                    className="p-0 border-0 bg-transparent me-3"
                    onClick={() => alert("Play Store link will be added!")}
                    aria-label="Download from Google Play"
                    type="button"
                  >
                    <img src={app1} alt="Google Play" />
                  </button>

                  <button
                    className="p-0 border-0 bg-transparent me-3"
                    onClick={() => alert("App Store link will be added!")}
                    aria-label="Download from App Store"
                    type="button"
                  >
                    <img src={app2} alt="App Store" />
                  </button>

                </div>

              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-md-6 mb-4 order-1 order-lg-2">
              <img src={phones} className="img-fluid" alt="phones" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
