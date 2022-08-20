import React,{useState} from 'react'
import {Col, Modal, Button} from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import EditUserForm from './EditUserForm';


function UserCard(props) {
  const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	


  const handleDelete = () => {
		props.deleteUser(props.userInfo.id);
	};

  return (
    <>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Edit Your Info</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <EditUserForm editUser={props.editUser}  hide={handleClose} userInfo={props.userInfo} />
    </Modal.Body>
  </Modal>

    <Col md={4}>
    <Card  className="colsm">
               
    <Card.Subtitle className="mb-2  text-muted">
   <h6> Name:{props.userInfo.name}</h6>
</Card.Subtitle>
    
        <Card.Subtitle className="mb-2  text-muted">
            <h6>Email:{props.userInfo.email}</h6>
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
            <h6>Password:{props.userInfo.gen}</h6>
        </Card.Subtitle>
        <Button 
         title="Edit" onClick={handleShow} className="but" variant="primary" type="submit">
        <span>&#9999;</span>
     </Button>
        <Button onClick={handleDelete} title="Delete" className="but"  variant="primary" type="submit">
      <span> &#10060;</span> 
     </Button>
   
</Card>
    </Col>
    </>
  )
}

export default UserCard