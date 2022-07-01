import React from 'react'
import {useNavigate} from 'react-router-dom'
import './NotFound.css'
import sad from '../../img/sad.png'

function NotFound() {

	const navigate = useNavigate()

	const backHome = () =>{
		navigate('/')
	}

  return (
	<section className='not-found'>
		<img src={sad} alt='sad face'/>
		<h2>404</h2>
		<p>We couldn't find the page you are looking for.</p>
		<p className='back-home' onClick={backHome}>Go to home page</p>

	</section>
  )
}

export default NotFound