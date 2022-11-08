import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addUser } from "../action/userAction";
import { connect, } from "react-redux";
import { v4 as uuid } from "uuid";

import {db} from "../Firebase/config"
import { doc, setDoc, serverTimestamp} from "firebase/firestore";
import {Card} from "react-bootstrap"
import pt from "../pages/3.JPG"


function Userform(props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	


	const handleSubmit = async(e) => {
		e.preventDefault();
		
		if(name===""){
			return alert("Please fill the name inputs")
		}

		let newUser = { name, email, password, id: uuid(), timestamp: serverTimestamp(),  };
		
		console.log(newUser)
		try {
			await setDoc(doc(db, "Students", newUser.id), newUser);
		} catch (e) {
			console.log(e);
		}
		

		setName("");
		setEmail("");
		setPassword("");

	
		
		
		
		
		
		
		
		



		}
	return (
		<div>
		<div className= "formdivmain">
		




		<Card className="cardsmsignup"  style={{ width: '18rem' }}>
		<div className='smdiv'>
		<img  className='pic' src={pt} alt="img"/> <h1>Eric project</h1>
		</div>
		<Card.Body>
		  <Card.Title> <h3>Welcome Home</h3>    </Card.Title>
		  <Card.Text>
		  <Form>
			<Form.Group className="mb-3 " controlId="formBasicEmail">
				<Form.Label className="color">Name</Form.Label>
				<Form.Control
					type="text"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
			</Form.Group>
			<Form.Group className="mb-3 " controlId="formBasicEmail">
				<Form.Label className="color">Email address</Form.Label>
				<Form.Control
					type="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label className="color">Password</Form.Label>
				<Form.Control
					type="text"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
			</Form.Group>

			<Button className="formbt" title="Submit" onClick={handleSubmit} variant="primary" type="submit">
				 &#10004;
			</Button>
		</Form>
		  </Card.Text>
		  
		</Card.Body>
	  </Card>

	  </div>
		</div>
		
	);
	
}



const mapDispatch = {
	AddNewUser: addUser,
};
export default connect(null, mapDispatch)(Userform);