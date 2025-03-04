const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());


mongoose.connect("mongodb://localhost:27017/dashboard", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log(" MongoDB Connected"))
.catch((error) => console.error("MongoDB Connection Error:", error));


const studentSchema = new mongoose.Schema({
  name: String,
  registerNo: { type: String, unique: true },
  email: String,
  password: String,
});

const teacherSchema = new mongoose.Schema({
  Teachername: String,
  TeacherregisterNo: { type: String, unique: true },
  Teacheremail: String,
  Teacherpassword: String,
});


const Student = mongoose.model("student", studentSchema);
const Teacher = mongoose.model("teacher", teacherSchema);

app.post("/signup", async (req, res) => {
  try {
    const { name, registerNo, email, password } = req.body;

    const existingStudent = await Student.findOne({ registerNo });
    if (existingStudent) {
      return res.status(400).json({ message: " Register Number already exists!" });
    }

    const newStudent = new Student({ name, registerNo, email, password });
    await newStudent.save();

    res.status(201).json({ message: "Signup Successful!" });
  } catch (error) {
    console.error(" Signup Error:", error);
    res.status(500).json({ message: " Signup Failed!", error: error.message });
  }
});

//Teacher Signup
app.post("/teachersignup", async (req, res) => {
  try {
    const { Teachername, TeacherregisterNo, Teacheremail, Teacherpassword } = req.body;

    const existingTeacher = await Teacher.findOne({ TeacherregisterNo });
    if (existingTeacher) {
      return res.status(400).json({ message: "Register Number already exists!" });
    }

    const newTeacher = new Teacher({ Teachername, TeacherregisterNo, Teacheremail, Teacherpassword });
    await newTeacher.save();

    res.status(201).json({ message: "Signup Successful!" });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Signup Failed!", error: error.message });
  }
});

//Student Login
app.post("/signupdata", async (req, res) => {
  try {
    const { registerNo, password } = req.body;
    console.log("🔹 Login Attempt:", registerNo);

    const student = await Student.findOne({ registerNo });
    if (!student) {
      console.log("Register Number Not Found");
      return res.status(401).json({ message: " Invalid Register Number!" });
    }

    if (student.password !== password) {
      console.log(" Incorrect Password");
      return res.status(401).json({ message: "Invalid Password!" });
    }

    console.log("login Successful");
    res.json({ message: " Login Successful!", registerNo: student.registerNo });
  } catch (error) {
    console.error(" Login Error:", error);
    res.status(500).json({ message: " Login Failed!", error: error.message });
  }
});

//Teacher Login
app.post("/teacherlogin", async (req, res) => {
  try {
    const { TeacherregisterNo, Teacherpassword } = req.body;
    console.log("🔹 Login Attempt:", TeacherregisterNo);

    const teacher = await Teacher.findOne({ TeacherregisterNo });
    if (!teacher) {
      console.log("Register Number Not Found");
      return res.status(401).json({ message: "Invalid Register Number!" });
    }

    if (teacher.Teacherpassword !== Teacherpassword) {
      console.log("Incorrect Password");
      return res.status(401).json({ message: " Invalid Password!" });
    }

    console.log("Login Successful");
    res.json({ message: "Login Successful!", TeacherregisterNo: teacher.TeacherregisterNo });
  } catch (error) {
    console.error(" Login Error:", error);
    res.status(500).json({ message: " Login Failed!", error: error.message });
  }
});






const StudentDataSchema = new mongoose.Schema({
  name: String,
  registerNo: { type: String, unique: true },
  dept: String,
  photo: String,
  semesterResults: [Number],
  assignmentsCompleted: Number,
  totalAssignments: Number,
  achievements: [String],
});

const StudentData = mongoose.model("StudentData", StudentDataSchema);


app.get("/teacherpanel", async (req, res) => {
  try {
    const students = await StudentData.find();
    res.json(students);
  } catch (error) {
    console.error(" Error fetching students:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


app.post("/teacherpanel", async (req, res) => {
  try {
    const { name, registerNo, dept, photo, semesterResults, assignmentsCompleted, totalAssignments, achievements } = req.body;

    if (!name || !registerNo || !dept || !photo || !semesterResults || !assignmentsCompleted || !totalAssignments || !achievements) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newStudent = new StudentData({
      name,
      registerNo,
      dept,
      photo,
      semesterResults,
      assignmentsCompleted,
      totalAssignments,
      achievements,
    });

    await newStudent.save();
    res.status(201).json({ message: "Student details uploaded successfully!" });
  } catch (error) {
    console.error("Error uploading student:", error);
    res.status(500).json({ message: "Failed to upload student details" });
  }
});






app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
