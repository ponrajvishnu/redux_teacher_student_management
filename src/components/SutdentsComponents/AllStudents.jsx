import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteStudent } from '../../redux/studentsReducer';

function AllStudents() {

  let navigate = useNavigate();

  let dispatch = useDispatch();

  let data = useSelector((state) => state.students.studentsData)

  return <div className='container-fluid'>
    <h1>All Students</h1>
    <div  style={{float:"right",marginBottom: "10px"}} onClick={() => navigate('/add-student')} ><Button varient="primary">Add Student</Button></div>
    <Table striped bordered hover>
        <thead>
            <th>#</th>
            <th>Student Name</th>
            <th>Email</th>
            <th>Mentor</th>
            <th>Action</th>
        </thead>
        <tbody>
            {
              data.map((e,i) =>{
                return <tr key={i}>
                  <td>{i+1}</td>
                  <td>{e.studentName}</td>
                  <td>{e.email}</td>
                  <td>{e.mentor}</td>
                  <td>
                    <Button variant="primary" onClick={() => navigate(`/edit-student/${i}`)}> Edit </Button>
                    &nbsp; &nbsp;
                    <Button variant="danger" onClick={() => {dispatch(deleteStudent({index:i}))}}> Delete </Button>
                  </td>
                </tr>
              })
            }
        </tbody>
    </Table>
  </div>
}

export default AllStudents
