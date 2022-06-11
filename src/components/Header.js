import React from 'react'
import {Link} from 'react-router-dom'

import './Header.css'

function Header() {
  return (
	<nav>
		<h2>Bass Pool Group</h2>
		<ul className='nav-links'>
			<li> <Link to='/'>Home</Link> </li>
			<li> <Link to='/'>Gallery</Link> </li>
			<li> <Link to='/'>Services</Link> </li>
			<li> <Link to='/'>About Us</Link> </li>
			<li> <Link to='/'>Contact Us</Link> </li>
		</ul>


	</nav>
  )
}

export default Header