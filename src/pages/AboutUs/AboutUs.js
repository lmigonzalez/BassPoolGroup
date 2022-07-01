import React from 'react'

import './AboutUs.css'
import Team from '../../img/team.jpg'

function AboutUs() {
  return (
	<section className='aboutus-container'>
		<h1>About Us</h1>
		<img alt='bass pool group team' src={Team}></img>
		<h2>Transforming your backyard dream</h2>
		<p>When a decision is made to build a pool in your backyard, the most important step is finding the right people. Bass Pool Group has served and transformed hundreds of yards around Miami, constantly leaving the customer very satisfied. Finally, your backyard could go from unattractive or uninteresting to a unique paradise. Contact us through our email at bservicecorp@gmail.com</p>
	</section>
  )
}

export default AboutUs