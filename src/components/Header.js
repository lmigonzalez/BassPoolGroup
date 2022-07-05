import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";



import './Header.css'

function Header() {

	const [toggleMenu, setToggleMenu] = useState(false)
	const handleToggle = () =>{
		setToggleMenu(!toggleMenu)
	}

  return (
	<nav>
		<div className='nav-container'>
			<h2>Bass Pool Group</h2>
			<ul className='nav-links'>
				<li> <Link to='/'>Home</Link> </li>
				<li> <Link to='/gallery'>Gallery</Link> </li>
				<li> <Link to='/services'>Services</Link> </li>
				<li> <Link to='/aboutus'>About Us</Link> </li>
				<li> <Link to='/contactus'>Contact Us</Link></li>
			</ul>
			<GiHamburgerMenu className='hamburger-menu' onClick={handleToggle}/>
		</div>
		<div className={!toggleMenu? 'mobile-menu' : 'mobile-menu active'}>
			<ul className='mobile-nav-links'>
				<li> <Link to='/'>Home</Link> </li>
				<li> <Link to='/gallery'>Gallery</Link> </li>
				<li> <Link to='/services'>Services</Link> </li>
				<li> <Link to='/aboutus'>About Us</Link> </li>
				<li> <Link to='/contactus'>Contact Us</Link></li>
			</ul>
		</div>
	
	</nav>
  )
}

export default Header


