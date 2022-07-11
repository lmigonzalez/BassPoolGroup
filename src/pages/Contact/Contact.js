import React, {useState} from "react";

import axios from "axios";

import { Form, Button } from "react-bootstrap";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";


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

  const [lastNameDisabled, setLastNameDisabled] = useState(true)
  const [emailDisabled, setEmailDisabled] = useState(true)
  const [zipCodeDisabled, setZipCodeDisabled] = useState(true)
  const [phoneDisabled, setPhoneDisabled] = useState(true)
  const [messageDisabled, setMessageDisabled] = useState(true)
  const [submitDisabled, setSubmitDisabled] = useState(true)

  const [sentSuccess, setSentSuccess] = useState(false)
  const [sentError, setSentError] = useState(false)

  const handleInputError = (e) =>{
      if(e.target.name === 'first_name'){
        if(e.target.value.trim().length > 2){
          setLastNameDisabled(false)
        }else{
          setLastNameDisabled(true)
          setEmailDisabled(true)
          setZipCodeDisabled(true)
          setPhoneDisabled(true)
          setMessageDisabled(true)
          setSubmitDisabled(true)
        }
      }

      if(e.target.name === 'last_name'){
        if(e.target.value.trim().length > 2){
          setEmailDisabled(false)
        }else{
          setEmailDisabled(true)
          setZipCodeDisabled(true)
          setPhoneDisabled(true)
          setMessageDisabled(true)
          setSubmitDisabled(true)
        }
      }

      if(e.target.name === 'email'){
        if(e.target.value.trim().length > 4 && e.target.value.includes('@') && e.target.value.includes('.')){
          setZipCodeDisabled(false)
          
        }else{
          setZipCodeDisabled(true)
          setPhoneDisabled(true)
          setMessageDisabled(true)
          setSubmitDisabled(true)
        }
  
      }
      if(e.target.name === 'zip_code'){
        if(e.target.value.trim().length > 4){
          setPhoneDisabled(false)
        }else{
          setPhoneDisabled(true)
          setMessageDisabled(true)
          setSubmitDisabled(true)
        }
      }

      if(e.target.name === 'phone_number'){
        if(e.target.value.trim().length > 9){
          setMessageDisabled(false)
        }else{
          setMessageDisabled(true)
          setSubmitDisabled(true)
        }
      }

      if(e.target.name === 'phone_number'){
        if(e.target.value.trim().length > 9){
          setSubmitDisabled(false)
        }else{
          setSubmitDisabled(true)
        }
      }

      
  }

  const closeSuccessMessage = () =>{
    setTimeout(() => {
      setSentSuccess(false)
    }, 5000)
  }

  const closeErrorMessage = () =>{
    setTimeout(() => {
      setSentError(false)
    }, 5000)
  }

  const handleChange = (e) =>{
    setUserData({
      ...userData, [e.target.name]: e.target.value
    })
    handleInputError(e)
    console.log(e.target.name)
  
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

    


    axios.post(`http://localhost:3001/api/createmessage`, userData)
    .then(res=>{
      setSentSuccess(true)
      closeSuccessMessage()
    }).catch(err=>{
      setSentError(true)
      closeErrorMessage()
    })

    setUserData(initialData)
    
    
  
  }



  return (
    <section className="form-container">
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="required">First Name</Form.Label>
          <Form.Control type="text" name='first_name' value={userData.first_name} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="required">Last Name</Form.Label>
          <Form.Control type="text" name='last_name' value={userData.last_name} onChange={handleChange} disabled={lastNameDisabled}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="required">Email</Form.Label>
          <Form.Control type="email" name='email' value={userData.email} onChange={handleChange} disabled={emailDisabled}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="required">Zip Code</Form.Label>
          <Form.Control type="number" name='zip_code' value={userData.zip_code} onChange={handleChange} disabled={zipCodeDisabled}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="required">Phone</Form.Label>
          <Form.Control type="number" name='phone_number' value={userData.phone_number} onChange={handleChange} disabled={phoneDisabled}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Do you have any questions you want to ask?</Form.Label>
          <Form.Control as="textarea" name='message' value={userData.message} onChange={handleChange} disabled={messageDisabled}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label className="required" name='spa'>With spa?</Form.Label>
            <Form.Check reverse label="Yes" name="group1" type="radio"
            onClick={handleRadioTrue}  />
            <Form.Check reverse label="No" name="group1" type="radio" onClick={handleRadioFalse}/>
            </Form.Group>
        
            <div className="btn-container">
              <p className={sentSuccess? 'success-message' : 'success-message inactive'}><AiOutlineCheck className="check-icon"/> Message sent successfully</p>

              <p className={sentError? 'error-message' : 'error-message inactive'}><AiOutlineClose className="check-icon"/> Your message was not sent. Please try again</p>
              <Button type="submit" disabled={submitDisabled}>Submit</Button>
            </div>
        </Form>
    </section>
  );
}

export default Contact;
