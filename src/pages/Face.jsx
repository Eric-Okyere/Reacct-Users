import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pt from "../pages/3.JPG"
import { Link } from 'react-router-dom';

function Face() {
  return (
   
    <div className='mydiv'>
    <Card className="cardsm"  style={{ width: '18rem' }}>
    <div className='smdiv'>
    <img  className='pic' src={pt} /> <h1>Eric project</h1>
    </div>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <div className="butdiv"><Link to="/signin">  <Button className='mybut' >Log in </Button> </Link></div>
     
      <div className='contdiv1'>
    <h6 className='dont'>Don't have an account? </h6>
     <Link to="/signup"><button className='signinbut'>Sign up</button></Link>
    </div>  
    </Card.Body>
  </Card>
  
    </div>
  )
}

export default Face
 

