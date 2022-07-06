import React from 'react'
import { useNavigate } from 'react-router-dom'
import './FreeEstimate.css'

import {Button} from 'react-bootstrap'

function FreeEstimate() {
	const navigate = useNavigate()

	const goToContactPage= () =>{
		navigate('/contactus')
	}

  return (
	<section className='estimate-container'>
		<div className='estimate-content'>
			<h2>Get a free estimate</h2>
			<p>With more than 10 years and more than 100 satisfied clients, Bass Pool Group is one of Miami's best-rated swimming pool construction companies.</p>
			<Button onClick={goToContactPage}>Get a Free Estimate Now</Button>
		</div>
	</section>
  )
}

export default FreeEstimate