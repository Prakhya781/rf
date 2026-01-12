import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
   const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user.id) return;

    fetch(`http://localhost:5000/api/orders/${user.id}`)
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.error(err));
  }, [user.id]);

  return (
    <div className="profile-dark-wrapper">
      <div className="profile-dark-card">
         <div className="profile-dark-close" onClick={() => navigate("/")}>
          ✕
        </div>
        <div className="profile-dark-header">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            className="profile-dark-avatar"
            alt="user"
          />
          <h2>{user.name || "Guest User"}</h2>
          <p>{user.email || "Email not available"}</p>
        </div>

        <div className="profile-dark-details">
          <div className="dark-detail-row">
            <span>User ID</span>
            <strong>{user.id || "Not Available"}</strong>
          </div>
          <div className="dark-detail-row">
            <span>Phone</span>
            <strong>{user.phone || "Not Provided"}</strong>
          </div>
          <div className="dark-detail-row">
            <span>Role</span>
            <strong>{user.role || "Member"}</strong>
          </div>
          <div className="dark-detail-row">
            <span>Current Orders</span>
            <strong>{orders.length}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

