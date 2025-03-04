import React from 'react'
import Homepage from './Components/Homepage'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import StudentLogin from './Components/StudentLogin'
import Studentsignup from './Components/Studentsignup'
import Dashboard from './Components/Dashboard'
import TeacherPanel from './Components/TeacherPanel'
import TeacherLogin from './Components/TeacherLogin'
import Teachersignup from './Components/Teachersignup'
import Contact from './Components/Contact'
export default function App() {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/StudentLogin' element={<StudentLogin/>}/>
        <Route path='/Studentsignup' element={<Studentsignup/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
         <Route path='/TeacherPanel' element={<TeacherPanel/>}/>
         <Route path='/TeacherLogin' element={<TeacherLogin/>}/>
         <Route path='/Teachersignup' element={<Teachersignup/>}/>
         <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}


