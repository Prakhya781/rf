import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

const AuthPage = ({ setIsLoggedIn }) => {
  const [activeForm, setActiveForm] = useState("login");
  const navigate = useNavigate();

  // ----------- LOGIN -------------
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password }),
});

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setIsLoggedIn(true);
        navigate("/home");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  // ----------- SIGNUP -------------
  const handleSignup = async (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const dob = e.target.dob.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ firstName, lastName, dob, email, password }),
});


      const data = await res.json();
      if (res.ok) {
        alert("Signup successful! Please login.");
        setActiveForm("login");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-toggle">
          <button
            className={activeForm === "login" ? "active" : ""}
            onClick={() => setActiveForm("login")}
          >
            Login
          </button>
          <button
            className={activeForm === "signup" ? "active" : ""}
            onClick={() => setActiveForm("signup")}
          >
            Sign Up
          </button>
        </div>

        {activeForm === "login" && (
          <form className="auth-form" onSubmit={handleLogin}>
            <h2>Welcome Back</h2>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button className="auth-btn" type="submit">Login</button>
          </form>
        )}

        {activeForm === "signup" && (
          <form className="auth-form" onSubmit={handleSignup}>
            <h2>Create Account</h2>
            <input type="text" name="firstName" placeholder="First Name" required />
            <input type="text" name="lastName" placeholder="Last Name" required />
            <input type="date" name="dob" placeholder="Date of Birth" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button className="auth-btn" type="submit">Sign Up</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
