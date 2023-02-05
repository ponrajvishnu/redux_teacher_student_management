import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addTeacher } from '../../redux/teachersReducer';
import { useNavigate } from 'react-router-dom';
import Select from "react-select";

function AddTeacher() {

    let navigate = useNavigate();

    let dispatch = useDispatch();

    let [mentorName,setFName] = useState();
    let [Mobile,setMobile] = useState();
    let [Email,setEmail] = useState();
    let [Students,setStudents] = useState();
    let [options,setOptions]=useState([]);

    let studentData = useSelector((state) => state.students.studentsData)

    if(studentData){
        studentData.map((e) => {
        options.push({ //initialize options for multi select dropdown
            value:options.length+1,
            label:e.studentName
        })
        })
    }
    
    let handleSumbit = () => {
        dispatch(addTeacher({mentorName,Mobile,Email,Students}))
        navigate('/all-teachers')
    }

    let UpdateSelected = (e)=>{
        setStudents(Array.isArray(e)?e.map(x=>x.label):[]);
    }

  return <div className="container-fluid">
    <Form>
        <Form.Group className="mb-3">
            <Form.Label>Mentor Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" onChange={(e) => setFName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" placeholder="Enter Mobile" onChange={(e) => setMobile(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <label>Students : </label>
        <Select isMulti options={options} className="input" displayValue="Student" onChange={UpdateSelected}/>

        <Button variant="primary" onClick={() => handleSumbit()}>Submit</Button>
    </Form>
    </div>
}

export default AddTeacher
