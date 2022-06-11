import React from "react";

import {Form, Button} from 'react-bootstrap'

import "./Contact.css";

function Contact() {
  return (
    <section className="form-container">
      <h1>Contact Us</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
		<Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>

		<Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

		<Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
		<Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Do you have any questions you want to ask?</Form.Label>
          <Form.Control as="textarea"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
		<Form.Label>With spa?</Form.Label>
		<Form.Check
            reverse
            label="Yes"
            name="group1"
			type="radio"
  
          />
          <Form.Check
            reverse
            label="No"
            name="group1"
			type="radio"
  
          />
        </Form.Group>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
}

export default Contact;
