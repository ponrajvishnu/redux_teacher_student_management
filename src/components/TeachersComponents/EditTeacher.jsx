import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editTeacher } from '../../redux/teachersReducer';

function AddTeacher() {

    let {id} = useParams();

    let navigate = useNavigate();

    let dispatch = useDispatch();

    let data = useSelector((state) => state.teachers.teachersData)
    
    let [firstName,setFName] = useState();
    let [lastName,setLName] = useState();
    let [Mobile,setMobile] = useState();
    let [Email,setEmail] = useState();
    let [Students,setStudents] = useState();

    useEffect(() => {
        if(id && id < data.length){
            setFName(data[id].firstName)
            setLName(data[id].lastName)
            setMobile(data[id].Mobile)
            setEmail(data[id].Email)
            setStudents(data[id].Students)
        }else{
            navigate('/all-teachers')
        }
    },[])

    let handleSumbit = () => {
        dispatch(editTeacher({index:id,data:{firstName,lastName,Mobile,Email,Students}}))
        navigate('/all-teachers')
    }

  return <div className="container-fluid">
    <Form>
        <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" value={firstName} placeholder="Enter First Name" onChange={(e) => setFName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" value={lastName} placeholder="Enter Last Name" onChange={(e) => setLName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" value={Mobile} placeholder="Enter Mobile" onChange={(e) => setMobile(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" value={Email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Assigned Students</Form.Label>
            <Form.Control type="text" value={Students} placeholder="Enter Students" onChange={(e) => setStudents(e.target.value)}/>
        </Form.Group>

        <Button variant="primary" onClick={() => handleSumbit()}>Submit</Button>
    </Form>
    </div>
}

export default AddTeacher
