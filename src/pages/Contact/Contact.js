import React, {useState} from "react";

import axios from "axios";

import { Form, Button } from "react-bootstrap";

import "./Contact.css";

function Contact() {
  const initialData = {
    first_name: '',
    last_name: '',
    email: '',
    zip_code: 0,
    phone_number: 0,
    message: '',
    spa: false,
  }
  const [userData, setUserData] = useState(initialData)

  const handleChange = (e) =>{
    setUserData({
      ...userData, [e.target.name]: e.target.value
    })

  }

  const handleRadioTrue = () =>{
    setUserData({
      ...userData, spa: true
    })
  }

  const handleRadioFalse = () =>{
    setUserData({
      ...userData, spa: false
    })
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault()


    axios.post('http://localhost:1337/api/user-informations', {"data":{
     "first_name": userData.first_name,
     "last_name": userData.last_name,
     "email": userData.email,
     "zip_code": userData.zip_code,
     "phone_number": userData.phone_number,
     "message": userData.message,
     "spa": userData.spa,

    }})
    .then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })

    setUserData(initialData)
  
  }



  return (
    <section className="form-container">
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="required">First Name</Form.Label>
          <Form.Control type="text" name='first_name' value={userData.first_name} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="required">Last Name</Form.Label>
          <Form.Control type="text" name='last_name' value={userData.last_name} onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="required">Email</Form.Label>
          <Form.Control type="email" name='email' value={userData.email} onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="required">Zip Code</Form.Label>
          <Form.Control type="number" name='zip_code' value={userData.zip_code} onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="required">Phone</Form.Label>
          <Form.Control type="number" name='phone_number' value={userData.phone_number} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Do you have any questions you want to ask?</Form.Label>
          <Form.Control as="textarea" name='message' value={userData.message} onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label className="required" name='spa'>With spa?</Form.Label>
            <Form.Check reverse label="Yes" name="group1" type="radio"
            onClick={handleRadioTrue}  />
            <Form.Check reverse label="No" name="group1" type="radio" onClick={handleRadioFalse}/>
            </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
    </section>
  );
}

export default Contact;
