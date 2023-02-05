import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTeacher } from '../../redux/teachersReducer';

function AllTeachers() {
    
    let navigate = useNavigate();

    let dispatch = useDispatch();
    
    let data = useSelector((state) => state.teachers.teachersData)

  return <div className='container-fluid'>
    <h1>All Teachers</h1>
    <div  style={{float:"right",marginBottom: "10px"}}><Button varient="primary" onClick={() => navigate('/add-teacher')}>Add Teacher</Button></div>
    <Table striped bordered hover>
        <thead>
            <th>#</th>
            <th>Mentor Name</th>
            <th>Mobile Number</th>
            <th>Email</th>
            <th>Assigned Students</th>
            <th>Action</th>
        </thead>
        <tbody>
            {
                data.map((e,i) => {
                    return <tr key={i}>
                        <td>{i+1}</td>
                        <td>{e.mentorName}</td>
                        <td>{e.Mobile}</td>
                        <td>{e.Email}</td>
                        <td>{e.Students}</td>
                        <td>
                            <Button variant="primary" onClick={() => navigate(`/edit-teacher/${i}`)}> Edit </Button>
                            &nbsp; &nbsp;
                            <Button variant="danger" onClick={() => dispatch(deleteTeacher({index:i}))}> Delete </Button>
                        </td>
                    </tr>
                })
            }
        </tbody>
    </Table>
  </div>
}

export default AllTeachers
