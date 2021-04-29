import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUp.css";
import "../../App.css";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
		  <h3>Your personal information</h3>
	  <Form>
	  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="First    last" />
  </Form.Group>

		<p>UTA information</p>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>UTA Email address</Form.Label>
    <Form.Control type="email" placeholder="name@mavs.uta.edu" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Your student ID</Form.Label>
    <Form.Control type="studentID" placeholder="100000000" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>What year are you in?</Form.Label>
    <Form.Control as="select">
      <option>I am a freshmen</option>
      <option>I am a sophomore</option>
      <option>I am a junior</option>
      <option>I am a senior</option>
      <option>None of these apply</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>What is your major?</Form.Label>
    <Form.Control type="studentMajor" placeholder="Software engineering" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Are you a national ACM member?</Form.Label>
    <Form.Control as="select">
      <option>Yes</option>
	  <option> NO</option>
	</Form.Control>
	</Form.Group>

	<Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Would you like to receive emails about ongoing events at ACM@UTA?</Form.Label>
    <Form.Control as="select">
      <option>Yes</option>
	  <option> NO</option>
	</Form.Control>
	</Form.Group>
	<p>Our Local Membership Fee is $15 per academic year, National Membership Fee is $10 per academic year, or Lifetime Membership Fee is $50 for your entire academic career. All extra fees only apply at UTA. Make sure to make checks payable to ACM.</p>
	<Form.Check type="radio" aria-label="radio 1" /> I agree
</Form>
      </Form>
	  
	   <Button variant="dark" align >Sign Up</Button>{' '}
	   
    </div>
  );
}