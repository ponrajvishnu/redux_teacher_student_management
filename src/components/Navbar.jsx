import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';

function Navbar() {

    let navigate = useNavigate();

  return <>
    <Nav>
      <Nav.Item>
        <Nav.Link onClick={() => navigate('/all-teachers')}>Teachers</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => navigate('/all-students')}>Students</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => navigate('/assign-student')}>Assign Student</Nav.Link>
      </Nav.Item>
    </Nav>
  </>
}

export default Navbar
