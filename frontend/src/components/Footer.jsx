import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              {/* Use real URLs or "#" replaced with "javascript:void(0)" */}
              <a href="/register" className="footer-link">Register</a>
              <a href="/forum" className="footer-link">Forum</a>
              <a href="/affiliate" className="footer-link">Affiliate</a>
              <a href="/team" className="footer-link">Team</a>

              <div className="footer-social pt-4 text-center">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-dribbble"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="col-sm-12">
              <div className="text-center pt-5">
                <p className="text-light">© 2024. Feastify. All rights reserved.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
