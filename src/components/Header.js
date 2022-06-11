import React from 'react'
import {Link} from 'react-router-dom'

import './Header.css'

function Header() {
  return (
	<nav>
		<div className='nav-container'>
			<h2>Bass Pool Group</h2>
			<ul className='nav-links'>
				<li> <Link to='/'>Home</Link> </li>
				<li> <Link to='/gallery'>Gallery</Link> </li>
				<li> <Link to='/'>Services</Link> </li>
				<li> <Link to='/'>About Us</Link> </li>
				<li> <Link to='/contactus'>Contact Us</Link></li>
			</ul>
		</div>
	
	</nav>
  )
}

export default Header