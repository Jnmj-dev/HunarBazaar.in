import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    navigate("/"); // Redirect to home after signup
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Signup Page</h2>
      <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{ display: "block", marginBottom: "10px", padding: "5px" }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ display: "block", marginBottom: "10px", padding: "5px" }}
          />
        </div>
        <button type="submit" style={{ padding: "8px 16px", backgroundColor: "blue", color: "white", border: "none", cursor: "pointer" }}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
