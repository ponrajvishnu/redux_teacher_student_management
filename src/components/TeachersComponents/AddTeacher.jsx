import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addTeacher } from '../../redux/teachersReducer';
import { useNavigate } from 'react-router-dom';

function AddTeacher() {

    let navigate = useNavigate();

    let dispatch = useDispatch();

    let [firstName,setFName] = useState();
    let [lastName,setLName] = useState();
    let [Mobile,setMobile] = useState();
    let [Email,setEmail] = useState();
    let [Students,setStudents] = useState();

    let handleSumbit = () => {
        dispatch(addTeacher({firstName,lastName,Mobile,Email,Students}))
        navigate('/all-teachers')
    }

  return <div className="container-fluid">
    <Form>
        <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" onChange={(e) => setFName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" onChange={(e) => setLName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" placeholder="Enter Mobile" onChange={(e) => setMobile(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Assigned Students</Form.Label>
            <Form.Control type="text" placeholder="Enter Students" onChange={(e) => setStudents(e.target.value)}/>
        </Form.Group>

        <Button variant="primary" onClick={() => handleSumbit()}>Submit</Button>
    </Form>
    </div>
}

export default AddTeacher
