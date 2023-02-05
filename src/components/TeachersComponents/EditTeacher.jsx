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
    
    let [mentorName,setFName] = useState();
    let [Mobile,setMobile] = useState();
    let [Email,setEmail] = useState();
    let [Students,setStudents] = useState();

    useEffect(() => {
        if(id && id < data.length){
            setFName(data[id].mentorName)
            setMobile(data[id].Mobile)
            setEmail(data[id].Email)
            setStudents(data[id].Students)
        }else{
            navigate('/all-teachers')
        }
    },[])

    let handleSumbit = () => {
        dispatch(editTeacher({index:id,data:{mentorName,Mobile,Email,Students}}))
        navigate('/all-teachers')
    }

  return <div className="container-fluid">
    <Form>
        <Form.Group className="mb-3">
            <Form.Label>Mentor Name</Form.Label>
            <Form.Control type="text" value={mentorName} placeholder="Enter First Name" onChange={(e) => setFName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" value={Mobile} placeholder="Enter Mobile" onChange={(e) => setMobile(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" value={Email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>

        <Button variant="primary" onClick={() => handleSumbit()}>Submit</Button>
    </Form>
    </div>
}

export default AddTeacher
