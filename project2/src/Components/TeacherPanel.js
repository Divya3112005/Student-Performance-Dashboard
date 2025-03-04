
import React, { useState, useEffect } from "react";

const TeacherPanel = () => {
  const [formData, setFormData] = useState({
    name: "",
    registerNo: "",
    photo: "",
    semesterResults: "",
    assignmentsCompleted: 0,
    totalAssignments: 0,
    achievements: "",
  });

  

  const [students, setStudents] = useState([]); 

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await fetch("http://localhost:5000/teacherpanel");
    const data = await response.json();
    setStudents(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newStudent = {
      ...formData,
      semesterResults: formData.semesterResults.split(",").map(Number), 
      achievements: formData.achievements.split(","),
    };

    const response = await fetch ("http://localhost:5000/teacherpanel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStudent),
    });

    if (response.ok) {
      alert("Student details uploaded successfully!");
      setFormData({
        name: "",
        registerNo: "",
        dept:"",
        photo: "",
        semesterResults: "",
        assignmentsCompleted: 0,
        totalAssignments: 0,
        achievements: "",
      });

      fetchStudents();
    } else {
      alert("Failed to upload student details.");
    }
  };

  return (
    <div className="teacher-panel">
      <h2>Upload Student Details</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Student Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="registerNo" placeholder="Register Number" value={formData.registerNo} onChange={handleChange} required />
        <input type="text" name="dept" placeholder="Department Name" value={formData.dept} onChange={handleChange} required />
        <input type="text" name="photo" placeholder="Photo URL" value={formData.photo} onChange={handleChange} required />
        <input type="text" name="semesterResults" placeholder="Semester Results (e.g., 8.5,9.0,7.8)" value={formData.semesterResults} onChange={handleChange} required />
        <input type="number" name="assignmentsCompleted" placeholder="Assignments Completed" value={formData.assignmentsCompleted} onChange={handleChange} required />
        <input type="number" name="totalAssignments" placeholder="Total Assignments" value={formData.totalAssignments} onChange={handleChange} required />
        <input type="text" name="achievements" placeholder="Achievements (comma-separated)" value={formData.achievements} onChange={handleChange} required />
        <button type="submit">Upload</button>
      </form>

   
      <ul>
        {students.map((student) => (
          <li key={student.registerNo}>
            <strong>{student.name}</strong> - {student.registerNo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherPanel;
