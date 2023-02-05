import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../../redux/studentsReducer';
import { useDispatch, useSelector } from 'react-redux';
import Select from "react-select";

function AssignStudent() {

  let navigate = useNavigate();
  let dispatch = useDispatch();

  let [studentName,setFName] = useState("");
  let [mentor,setMentor]   = useState("");
  let [options,setOptions]=useState([]);

  useEffect(() => {
    
  },[])

  let mentorData  = useSelector((state) => state.teachers.teachersData)
  let studentData = useSelector((state) => state.students.studentsData)

  if(studentData){
    studentData.map((e) => {
      options.push({ //initialize options for multi select dropdown
        value:options.length+1,
        label:e.studentName
      })
    })
  }

  let UpdateSelected = (e)=>{
    setFName(Array.isArray(e)?e.map(x=>x.label):[]);
  }

  let handleSumbit = () => {
    dispatch(addStudent({studentName,mentor}))
    navigate('/all-students')
  }

  return <div className="container-fluid">
    <Form>
      <Form.Group className="mb-3">
          <Form.Label>Mentor</Form.Label>
          <Form.Select defaultValue={0} onChange={(e) => setMentor(e.target.value)}>
              <option value="0" disabled>Select Mentor</option>
              {
                  mentorData.map((e) => {
                      return <>
                          <option value={e.mentorName}>{e.mentorName}</option>
                      </>
                  })
              }
          </Form.Select>
      </Form.Group>
      <label>Students : </label>
      <Select isMulti options={options} className="input" displayValue="Student" onChange={UpdateSelected}/>
      <Button variant="primary" onClick={() => handleSumbit()}>Submit</Button>
    </Form>
  </div>
}

export default AssignStudent
