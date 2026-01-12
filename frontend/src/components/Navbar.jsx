import React, { useEffect } from "react";
import logo from "../images/logo.png";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/"); 
    window.location.reload();   // <-- Ensures AuthPage appears properly
  };

  const isLoggedIn = !!localStorage.getItem("token");

  useEffect(() => {
    const nav = document.querySelector(".navigation-wrap");

    const onScroll = () => {
      if (document.documentElement.scrollTop > 20) nav.classList.add("scroll-on");
      else nav.classList.remove("scroll-on");
    };
    window.addEventListener("scroll", onScroll);

    const navBar = document.querySelectorAll(".nav-link");
    const navCollapse = document.querySelector(".navbar-collapse.collapse");

    const handleClick = () => {
      if (navCollapse && navCollapse.classList.contains("show")) {
        navCollapse.classList.remove("show");
      }
    };

    navBar.forEach((a) => a.addEventListener("click", handleClick));

    return () => {
      window.removeEventListener("scroll", onScroll);
      navBar.forEach((a) => a.removeEventListener("click", handleClick));
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navigation-wrap">
      <div className="container">
        
        <Link className="navbar-brand" to="/home">
          <img src={logo} alt="logo" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <i className="fas fa-stream navbar-toggler-icon"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About US</a></li>
            <li className="nav-item"><a className="nav-link" href="#explore-food">Explore Foods</a></li>
            <li className="nav-item"><a className="nav-link" href="#testimonial">Reviews</a></li>
            <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>

            <li><button className="main-btn">1200 345 123</button></li>

            {isLoggedIn && (
              <li className="nav-item profile-nav-item">
                <Link to="/profile">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="profile"
                    className="profile-icon"
                  />
                </Link>
              </li>
            )}

            <li>
              {isLoggedIn ? (
                <button className="main-btn" onClick={handleLogout}>Log Out</button>
              ) : (
                <Link to="/" className="main-btn">Sign Up / Login</Link>
              )}
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
