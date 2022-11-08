import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { auth } from "../Firebase/config";
import {
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import pt from "../pages/3.JPG"
import { Link } from 'react-router-dom';
import google from "../pages/logo.png"
import face from "../pages/facebk.png"
import FacebookLogin from 'react-facebook-login';



function Signin() {
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const provider = new GoogleAuthProvider();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const user = await signInWithEmailAndPassword(auth, email, password);
			navigate("/home", { replace: true });
			console.log(user);
		} catch (e) {
			alert(e.message);
			console.error(e.message);
		}

		setPassword("");
		setEmail("");
	};

	const handleGoogle = async (e) => {
		e.preventDefault();
		try {
			const user = await signInWithPopup(auth, provider);
			console.log(user);
			navigate("/home", { replace: true });
		} catch (e) {
			console.error(e.message);
		}

		setPassword("");
		setEmail("");
	};


	const responseFacebook = (response) => {
		console.log("login result", response);
	  }

	  const componentClicked=(data)=>{
		console.warn(data)
	  }

	return (
		<div className='App mydivlog'>
		
		<Card className="cardsm2"  style={{ width: '18rem' }}>
		<div className='smdiv'>
		<img  className='pic' src={pt} alt="img"/> <h1>Eric project</h1>
		</div>
		<Card.Body>
		  <Card.Title> <h1 classNaem="logg">Log in to continue.</h1> </Card.Title>
		  <Card.Text>
		  <Form>
		  <Form.Group className="mb-3" controlId="formBasicEmail">
			 
			  <Form.Control
				  type="email"
				  value={email}
				  placeholder="Email Address"
				  onChange={(e) => {
					  setEmail(e.target.value);
				  }}
			  />
		  </Form.Group>
		  <Form.Group className="mb-3" controlId="formBasicEmail">
			  
			  <Form.Control
				  type="password"
				  placeholder="Password"
				  value={password}
				  onChange={(e) => {
					  setPassword(e.target.value);
				  }}
			  />
		  </Form.Group>
		   <a href="https://accounts.google.com/signin/v2/recoveryidentifier?flowName=GlifWebSignIn&flowEntry=AccountRecovery"> Forgot your Password?</a>
			<div className='contdiv2'>
		  <Button className='mybut'  onClick={handleSubmit} type="submit">
			  Log In
		  </Button>
		  </div>
		  <div className='contdiv2 '>
		  
		  <Button className="mybut22" onClick={handleGoogle} variant="info" type="submit">
		  <img className="googleimg" src={google} alt="img"/>  sign In with Google
		  </Button>
		  </div>
		  <div className='contdiv2 '>
		  
		  <Button className="mybut2" onClick={responseFacebook } variant="info" type="submit">
		  <img className="googleimg" src={face} type="image" alt="img"/>  <FacebookLogin
	  appId="683339029722183"
	  autoLoad={true}
	  fields="name,email,picture"
	  onClick={componentClicked}
	  callback={responseFacebook} />
		  </Button>
		  </div>
	  </Form>
		  </Card.Text>
		
		  <div className='contdivlog'>
		<h6 className='dont'>Don't have an account? </h6>
		<Link to="/signup"><button className='signinbut'>Sign up</button></Link>
		</div>  
		</Card.Body>
	  </Card>

	  


		</div>
	);
}





export default Signin;