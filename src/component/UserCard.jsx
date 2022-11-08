import React,{useState} from 'react'
import {Col, Modal, Button} from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import EditUserForm from './EditUserForm';
import {DeleteNewUser} from "../action/userAction"
import {connect} from "react-redux"
import { doc, deleteDoc } from "firebase/firestore";
import {db} from "../Firebase/config"
import deleteicon from "../pages/Delete.png"

function UserCard(props) {
  const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	


  const handleDelete = async() => {

    await deleteDoc(doc(db, "Students", props.userInfo.id));
	};

  


  return (
    <div className='new col-md-6 ' >
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Edit Your Info</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <EditUserForm editUser={props.editUser}  hide={handleClose} userInfo={props.userInfo} />
    </Modal.Body>
  </Modal>
<div className='dis '>
    <Col >
    <Card  className="colsm ">
               
    <Card.Subtitle className="mb-2  text-muted">
   <h6 className='cardlab'> Name:  {props.userInfo.name}</h6>
</Card.Subtitle>
    
        <Card.Subtitle className="mb-2  text-muted">
            <h6 className='cardlab'>Email:  {props.userInfo.email}</h6>
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
            <h6 className='cardlab'>Password:  {props.userInfo.gen}</h6>
        </Card.Subtitle>
        <div className='cardbutdiv'><Button title="Edit" onClick={handleShow} className="but" variant="primary" type="submit">
        <span>&#9999;</span>
     </Button>
        <Button onClick={handleDelete} title="Delete" className="but"  variant="primary" type="submit">
      <img className='deleticon' src={deleteicon} alt="img"/> 
     </Button>
     </div>
</Card>
    </Col>
    </div>
    </div>
  )
};

const mapDispatch = {
	DeleteNewUser,
};
export default connect(null, mapDispatch)(UserCard)
  