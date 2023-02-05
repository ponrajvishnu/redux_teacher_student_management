import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../../redux/studentsReducer';
import { useDispatch, useSelector } from 'react-redux';

function AddStudent() {

    let navigate = useNavigate();
    let dispatch = useDispatch();

    let [studentName,setFName] = useState("");
    let [email,setEmail]     = useState("");
    let [mentor,setMentor]   = useState("");

    let handleSumbit = () => {
        dispatch(addStudent({studentName,email,mentor}))
        navigate('/all-students')
    }

    let data = useSelector((state) => state.teachers.teachersData)
    
    return <div className="container-fluid">
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Student Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Student Name" onChange={(e) => setFName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Mentor</Form.Label>
                <Form.Select defaultValue={0} onChange={(e) => setMentor(e.target.value)}>
                    <option value="0" disabled>Mentor</option>
                    {
                        data.map((e) => {
                            return <>
                                <option value={e.mentorName}>{e.mentorName}</option>
                            </>
                        })
                    }
                </Form.Select>
            </Form.Group>

            <Button variant="primary" onClick={() => handleSumbit()}>Submit</Button>
        </Form>
    </div>
}

export default AddStudent
