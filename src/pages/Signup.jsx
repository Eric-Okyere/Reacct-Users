import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { auth } from "../Firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Card } from "react-bootstrap";
import pt from "../pages/3.JPG"


function AddUserForm() {
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const user = await createUserWithEmailAndPassword(auth, email, password);
			console.log(user);
			navigate("/signin" , {replace:true});
		} catch (e) {
			console.error(e.message);
		}

		setPassword("");
		setEmail("");
	};

	return (
	

		<div className='mydiv2'>
    <Card className="cardsmsignup"  style={{ width: '18rem' }}>
    <div className='smdiv'>
    <img  className='pic' src={pt} alt="img"/> <h1>Eric project</h1>
    </div>
    <Card.Body>
      <Card.Title>   </Card.Title>
      <Card.Text>
	  <Form>
	  <Form.Group className="mb-3" controlId="formBasicEmail">
		  <Form.Label>Name</Form.Label>
		  <Form.Control
			  type="text"
			  value={name}
			  onChange={(e) => {
				  setName(e.target.value);
			  }}
			  />
			  </Form.Group>
	  <Form.Group className="mb-3" controlId="formBasicEmail">
		  <Form.Label>Email address</Form.Label>
		  <Form.Control
			  type="email"
			  value={email}
			  onChange={(e) => {
				  setEmail(e.target.value);
			  }}
		  />
	  </Form.Group>
	  <Form.Group className="mb-3" controlId="formBasicEmail">
		  <Form.Label>password</Form.Label>
		  <Form.Control
			  type="password"
			  value={password}
			  onChange={(e) => {
				  setPassword(e.target.value);
			  }}
		  />
	  </Form.Group>

	  <Button onClick={handleSubmit} className="mybut11" type="submit">
		  Submit
	  </Button>

	  <div className='contdivalredy'>
	  <h6 className='dont'>Alredy have an account? </h6>
	  <Link to="/signin"><button className='signinbut'>Log in</button></Link>
	  </div> 

  </Form>
      </Card.Text>
      
    </Card.Body>
  </Card>
  
    </div>
	);
}

// const mapDispatchToProps = {
// 	addUser: addUser,
// };
// export default connect(null, mapDispatchToProps)(AddUserForm);
export default AddUserForm;