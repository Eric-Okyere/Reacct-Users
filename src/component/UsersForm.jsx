import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Userform(props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [gen, setGen] = useState("");
	


	const handleSubmit = (e) => {
		e.preventDefault();
		props.newUser({ name, email, gen });
		setName("");
		setEmail("");
		setGen("");
		
		if(name===""){
			alert("Please fill the name inputs")
		}
		if(email==="") {
			alert("Please fill the email inputs")
		}
		if(gen===""){
			alert("Please fill gen the inputs")
		}
		


		}
	return (
		<Form>
			<Form.Group className="mb-3 colsm" controlId="formBasicEmail">
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
					type="text"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label className="color">Password</Form.Label>
				<Form.Control
					type="password"
					value={gen}
					onChange={(e) => {
						setGen(e.target.value);
					}}
				/>
			</Form.Group>

			<Button title="Submit" onClick={handleSubmit} variant="primary" type="submit">
				 &#10004;
			</Button>
		</Form>
	);
}

export default Userform;