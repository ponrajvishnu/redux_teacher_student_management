import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllTeachers from "./components/TeachersComponents/AllTeachers";
import AddTeacher from "./components/TeachersComponents/AddTeacher";
import EditTeacher from "./components/TeachersComponents/EditTeacher";
import AllStudents from "./components/SutdentsComponents/AllStudents";
import AddStudent from "./components/SutdentsComponents/AddStudent";
import EditStudent from "./components/SutdentsComponents/EditStudent";
import AssignStudent from "./components/SutdentsComponents/AssignStudent";

function App() {
  return <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/all-teachers" element={<AllTeachers />} />
        <Route path="all-students" element={<AllStudents />} />
        <Route path="/add-teacher" element={<AddTeacher />}/>
        <Route path="/edit-teacher/:id" element={<EditTeacher />} />
        <Route path='/add-student' element={<AddStudent />} />
        <Route path='/edit-student/:id' element={<EditStudent/>} />
        <Route path='/assign-student' element={<AssignStudent />} />

        <Route path="*" element={<Navigate to='/all-teachers'/>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
