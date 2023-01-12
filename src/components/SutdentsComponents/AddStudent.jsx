import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../../redux/studentsReducer';
import { useDispatch } from 'react-redux';

function AddStudent() {

    let navigate = useNavigate();
    let dispatch = useDispatch();

    let [firstName,setFName] = useState("");
    let [lastName,setLName]  = useState("");
    let [email,setEmail]     = useState("");
    let [mentor,setMentor]   = useState("");

    let handleSumbit = () => {
        dispatch(addStudent({firstName,lastName,email,mentor}))
        navigate('/all-students')
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
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Mentor</Form.Label>
            <Form.Select defaultValue={0} onChange={(e) => setMentor(e.target.value)}>
                <option value="0" disabled>Mentor</option>
                
            </Form.Select>
        </Form.Group>

        <Button variant="primary" onClick={() => handleSumbit()}>Submit</Button>
    </Form>
    </div>
}

export default AddStudent
