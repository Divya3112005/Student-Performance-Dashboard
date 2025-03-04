import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TeacherLogin = () => {
  const [formData, setFormData] = useState({
    TeacherregisterNo: "",
    Teacherpassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/teacherlogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Login Successful!");
      localStorage.setItem("token", data.token);
      navigate("/TeacherPanel");
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="login-container">
      <h2>Staff Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="TeacherregisterNo" value={formData.TeacherregisterNo} placeholder="Register Number" onChange={handleChange} required />
        <input type="password" name="Teacherpassword" placeholder="Password" value={formData.Teacherpassword} onChange={handleChange} required />
        <button type="submit" onClick={handleSubmit}>Login</button>
      </form>
      <p>Don't have an account? <a href="/Teachersignup">Sign up</a></p>
    </div>
  );
};

export default TeacherLogin;
