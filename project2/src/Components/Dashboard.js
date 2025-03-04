
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Chart from "react-apexcharts";
import "./Dashboard.css";

const Dashboard = () => {
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchStudentData = async () => {
      const registerNo = localStorage.getItem("registerNo");
      console.log("Stored registerNo in localStorage:", registerNo); // Debug
  
      if (!registerNo) {
        alert("Please login first!");
        navigate("/login");
        return;
      }
  
      try {
        console.log(`Fetching data for registerNo: ${registerNo}`);
        const response = await fetch('http://localhost:3000/teacherpanel');
  
        console.log("Response status:", response.status);
  
        if (!response.ok) {
          throw new Error(`Failed to fetch student data: ${response.status}`);
        }
  
        const data = await response.json();
        console.log("Received student data:", data);
  
        if (data.length === 0) {
          alert("Student data not found!");
          return;
        }
  
        setStudent(data[0]);
      } catch (error) {
        console.error("❌ Error fetching student data:", error);
        alert("Error fetching student data. Check console for details.");
      }
    };
  
    fetchStudentData();
  }, [navigate]);
  
    

  if (!student) return <p>Loading...</p>;

  return (
    <div className="dashboard-container">
      <div className="profile-section">
        <h2>{student.name}</h2>
        <p>Register No: {student.registerNo}</p>
        <img src={student.photo}/>
      </div>

      <div className="performance-section">
        <h3>Academic Performance</h3>
        {student.semesterResults.length > 0 ? (
          <Chart
            options={{ chart: { id: "performance-chart" }, xaxis: { categories: student.semesterResults.map((_, i) => `Sem ${i + 1}`) } }}
            series={[{ name: "GPA", data: student.semesterResults.map((s) => parseFloat(s)) }]}
            type="line"
            width="500"
           
          />
        ) : (
          <p>No academic records available</p>
        )}
      </div>

      <div className="assignments-section">
        <h3>Assignments Completed</h3>
        <p>{student.assignmentsCompleted ?? 0} / {student.totalAssignments ?? 0}</p>
      </div>

      <div className="achievements-section">
        <h3>Achievements</h3>
        {student.achievements?.length > 0 ? (
          <ul>{student.achievements.map((ach, index) => <li key={index}>{ach}</li>)}</ul>
        ) : (
          <p>No achievements yet</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
