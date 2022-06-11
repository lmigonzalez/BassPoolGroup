import React from 'react'

import './Gallery.css'

import pic from '../img/pic.jpg'


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
	</section>
  )
}

export default Gallery