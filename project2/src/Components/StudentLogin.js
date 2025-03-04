import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentsLogin.css";

const StudentLogin = () => {
  const [formData, setFormData] = useState({ registerNo: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🔹 Submitting login form:", formData);
  
    try {
      const response = await fetch("http://localhost:5000/signupdata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log("🔹 Server response:", data);
  
      if (response.ok) {
        alert("✅ Login Successful!");
        localStorage.setItem("registerNo", data.registerNo);
        navigate("/Dashboard");
      } else {
        alert(data.message || "❌ Invalid Credentials!");
      }
    } catch (error) {
      console.error("❌ Error:", error);
      alert("❌ Something went wrong! Please try again.");
    }
  };
  
  
  return (
    <div className="slogin">
      <div className="login-container">
        <h2>Student Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="number" name="registerNo" value={formData.registerNo} placeholder="Register Number" onChange={handleChange} required />
          <input type="password" name="password" value={formData.password} placeholder="Password" onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/Studentsignup">Sign up</a></p>
      </div>
    </div>
  );
};

export default StudentLogin;

