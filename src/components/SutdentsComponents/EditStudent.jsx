import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editStudent } from '../../redux/studentsReducer';

function EditStudent() {

    let {id} = useParams();

    let navigate = useNavigate();
    let dispatch = useDispatch();

    let [studentName,setFName] = useState("");
    let [email,setEmail]     = useState("");
    let [mentor,setMentor]   = useState("");

    let data = useSelector((state) => state.students.studentsData);

    useEffect(() => {
        if(id && id < data.length){
            setFName(data[id].studentName)
            setEmail(data[id].email)
            setMentor(data[id].mentor)
        }else{
            navigate('/all-teachers')
        }
    },[])

    let handleSumbit = () => {
        dispatch(editStudent({index:id,data:{studentName,email,mentor}}))
        navigate('/all-students')
    }

    let mentordata = useSelector((state) => state.teachers.teachersData)

    return <div className="container-fluid">
    <Form>
        <Form.Group className="mb-3">
            <Form.Label>Student Name</Form.Label>
            <Form.Control type="text" value={studentName} placeholder="Enter Student Name" onChange={(e) => setFName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Mentor</Form.Label>
            <Form.Select defaultValue={mentor} onChange={(e) => setMentor(e.target.value)}>
                <option value="0" disabled>Mentor</option>
                    {
                        mentordata.map((e) => {
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

export default EditStudent
