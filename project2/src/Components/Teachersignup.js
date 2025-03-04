import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Teachersignup = () => {
  const [formData, setFormData] = useState({
    Teachername: "",
    TeacherregisterNo: "",
    Teacheremail: "",
    Teacherpassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/teachersignup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Signup Successful! Please Login.");
      navigate("/TeacherLogin");
    } else {
      alert("Signup Failed!");
    }
  };

  return (
    <div className="signup-container">
      <h2>Staff Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="Teachername" value={formData.Teachername} placeholder="Full Name" onChange={handleChange} required />
        <input type="text" name="TeacherregisterNo" value={formData.TeacherregisterNo} placeholder="Register Number" onChange={handleChange} required />
        <input type="email" name="Teacheremail" value={formData.Teacheremail} placeholder="Email" onChange={handleChange} required />
        <input type="password" name="Teacherpassword" value={formData.Teacherpassword} placeholder="Password" onChange={handleChange} required /><br></br>
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/TeacherLogin">Login</a></p>
    </div>
  );
};

export default Teachersignup;
