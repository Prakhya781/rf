import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./style.css";
import "./responsive-style.css";

import AuthPage from "./components/AuthPage";
import Home from "./components/Home";
import ProfilePage from "./components/ProfilePage"; // <-- ADD THIS
import MenuPage from "./components/MenuPage";
import LearnMore from "./components/LearnMore";
import StorySection from "./components/StorySection";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        {/* AUTH PAGE */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/home" />
            ) : (
              <AuthPage setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />

        {/* HOME PAGE */}
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/" />}
        />

        {/* PROFILE PAGE */}
        <Route
          path="/profile"
          element={isLoggedIn ? <ProfilePage /> : <Navigate to="/" />}
        />
        <Route path="/menu" element={isLoggedIn ? <MenuPage /> : <Navigate to="/" />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/read-more" element={<StorySection />} />

        


      </Routes>
    </BrowserRouter>
  );
}

export default App;
