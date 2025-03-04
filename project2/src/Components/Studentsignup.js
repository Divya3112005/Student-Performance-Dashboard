import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Studentsignup.css";
const Studentsignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    registerNo: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Signup Successful! Please Login.");
      navigate("/StudentLogin");
    } else {
      alert("Signup Failed!");
    }
  };

  return (
    <div className="signup-container">
      <h2>Student Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"  name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="number" name="registerNo" placeholder="Register Number"  value ={formData.registerNo} onChange={handleChange} required />
        <input type="email"  name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required /><br></br>
        <button type="submit">Sign Up</button>
      </form>
      <p className="stud">Already have an account? <a href="/StudentLogin">Login</a></p>
    </div>
  );
};

export default Studentsignup;
