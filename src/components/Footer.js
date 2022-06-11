import React from 'react'
import {Link} from 'react-router-dom'

import './Footer.css'

function Footer() {
  return (
	<footer>
		<div>
			<h2>Bass Pool Group</h2>
			<div className='footer-nav'>
				<ul className='nav-links'>
					<li> <Link to='/'>Home</Link> </li>
					<li> <Link to='/'>Gallery</Link> </li>
					<li> <Link to='/'>Services</Link> </li>
					<li> <Link to='/'>About Us</Link> </li>
					<li> <Link to='/'>Contact Us</Link> </li>
				</ul>
			</div>
			<hr></hr>
			<div className='footer-contact'>
				<address>Location: 10850 NW 21st suit 210 Miami Florida 33172</address>
				<a href='mailto:basspoolgroup@gmail.com' target='_blank' rel="noopener noreferrer">basspoolgroup@gmail.com</a>
			</div>
		</div>

	</footer>
  )
}

export default Footer