import React from 'react'

import {Button} from 'react-bootstrap'

import './Hero.css'

function Hero() {
  return (
	<section className='hero-section'>
		<div className='overlay'>
			<div className='hero-content'>
				<p>IN-GROUND SWIMMING POOL</p>
				<h2>Create the pool of your dreams with us</h2>
				<p>We are a family-owned business that has been serving for more than
              a decade.</p>
			  <Button>Lets Start</Button>
			</div>
		</div>
	</section>
  )
}

export default Hero