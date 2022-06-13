import React from 'react'

import './Gallery.css'
import {Button} from 'react-bootstrap'
import { AiOutlineArrowRight } from "react-icons/ai";



import pic from '../../img/pic.jpg'


function Gallery() {
  return (
	<section className='gallery-container'>
		<h2>Gallery</h2>
		<div className='pics-section'>
			<img className='pics' src={pic}/>
			<img className='pics' src={pic}/>
			<img className='pics' src={pic}/>
			<img className='pics' src={pic}/>
			<img className='pics' src={pic}/>
			<img className='pics' src={pic}/>
			<img className='pics' src={pic}/>
			<img className='pics' src={pic}/>
			<img className='pics' src={pic}/>
			
		</div>
	<Button>See all photos <AiOutlineArrowRight/></Button>
	</section>
  )
}

export default Gallery