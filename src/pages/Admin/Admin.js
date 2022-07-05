import React, {useState} from 'react'
import axios from 'axios';
import './Admin.css'
import { Form, Button } from "react-bootstrap";

function Admin() {
	const initialData = {
		name: '',
		password: '',
	
	  }
	  const [userData, setUserData] = useState(initialData)

	const handleChange = (e) =>{
		setUserData({
			...userData, [e.target.name]: e.target.value
		  })
	}

	const handleSubmit = (e) =>{
		if(localStorage.getItem('userData')){
			// console.log('exist')
			localStorage.removeItem('userData')
		}
		e.preventDefault()
		const config = {
			headers: {
			  "Content-Type": "application/json",
			},
		  };
		axios.post('http://localhost:3000/api/login', userData, config)
		.then(res=>{
		  console.log(res.data.token)
		  localStorage.setItem('userData', JSON.stringify({token: res.data.token}))
		}).catch(err=>{
		  console.log('ERROR')
		})
	
		// setUserData(initialData)
	}
  return (
	<section className='admin-container'>
		<h1>Admin Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="required">Name</Form.Label>
          <Form.Control type="text" name='name' value={userData.name} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="required">Password</Form.Label>
          <Form.Control type="password" name='password' value={userData.password} onChange={handleChange}/>
        </Form.Group>
		<Button type="submit">Submit</Button>
        </Form>
	</section>
  )
}

export default Admin