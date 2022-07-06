import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Admin.css'
import { Form, Button } from "react-bootstrap";
import {useStateContext} from '../../context/StateContext'

function Admin() {

	const {
		isLogin,
		setIsLogin,
	} = useStateContext()

	const navigate = useNavigate()
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
			localStorage.removeItem('userData')
		}
		e.preventDefault()
		const config = {
			headers: {
			  "Content-Type": "application/json",
			},
		  };
		axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, userData, config)
		.then(res=>{

		  localStorage.setItem('userData', JSON.stringify({token: res.data.token}))
		  setIsLogin(true)
		  navigate('/dashboard')
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
          <Form.Label className="required mt-3">Password</Form.Label>
          <Form.Control type="password" name='password' value={userData.password} onChange={handleChange}/>
        </Form.Group>
		<Button type="submit">Submit</Button>
        </Form>
	</section>
  )
}

export default Admin