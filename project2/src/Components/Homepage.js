import React from "react";
import "../App.css";

import { Navigate, NavLink, useNavigate } from 'react-router-dom';
const Homepage = () => {
  const navigate=useNavigate()
  return (
    <div className="body">
      <h2 className="homepageh2">Student Performance Dashboard</h2>
      <p className="homepagep">
        A centralized platform for students and teachers to track academic performance.
      </p>


      <div className="container">
        <div className="grid-container">
  
          <div className="box1">
            <h3 className="student">Student Section</h3>
            <div className="stud-logo">
              <img 
                src="https://thumbs.dreamstime.com/b/student-welfare-logo-vector-illustration-art-design-334447298.jpg"
                alt="Logo"
                className="home-logo-img"
              />
            </div>
            <p>Students can view their grades, assignments, and progress reports in real-time.</p>
            <button className="button student-button" onClick={()=>navigate('StudentLogin')}>Student Login</button>
          </div>

          <div className="box2">
            <h3 className="teacher">Teacher Section</h3>
            <div className="teach-logo">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-M8LS4-hPFRJ7vQQiozHSXRENbkB536T5w&s" alt="Logo" className="home-logo-img2"
              />
            </div>
            <p>Teachers can upload assignments, grade students, and track progress.</p>
            <button className="button teacher-button"onClick={()=>navigate('TeacherLogin')}>Teacher Login</button>
            </div> </div></div>
            <img src="https://psr.edu.in/wp-content/uploads/2025/02/building-1.jpg" className="collegeimage"/>
            <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src='https://psr.edu.in/wp-content/themes/psr/favicon.png' alt="PSR Logo" className="college-logo" />
          <h2>PSR ENGINEERING COLLEGE</h2>
          <p>Approved by AICTE & Affiliated to Anna University Chennai</p>
          <p>
            P.S.R. ENGINEERING COLLEGE<br />
            Sevalpatti, Sivakasi - 626140.<br />
            Virudhunagar (Dist), Tamil Nadu, India.
          </p>
        </div>
        <div className="footer-right">
          <p><strong>Phone:</strong> 80125 31321 / 80125 31323 / 80125 31325</p>
          <p><strong>Fax:</strong> 04562-239284 / 04562-225261</p>
          <p><strong>Transport:</strong> 98949 12162</p>
          <p><strong>E-Mail:</strong> contact@psr.edu.in</p>
        </div>
      </div>
      <div className="footer-bottom">
        
        <br />© PSR-2025 | Designed by:Divya
      </div>
    </footer>
         
        </div>
      
 
  );
};

export default Homepage;
