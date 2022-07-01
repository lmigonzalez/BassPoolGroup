import React from 'react'
import './Process.css'

import Planing from '../../img/construction.png'
import Design from '../../img/sketch.png'
import Construction from '../../img/mixer-truck.png'

function Process() {
  return (
	<section className='steps-container'>
		<h2>Bass Pool Group Process</h2>
		<div className='steps step-one'>
			<div className='step-content'>
				<h3>Step 1</h3>
				<h3>Evaluation and Estimates</h3>
				<p>This step consists of analyzing and finding the structure's best position, size, and design, considering the properties of your yard and the codes required by the city..</p>
			</div>
			<div className='step-img'>
				<img src={Planing}/>
			</div>
		</div>

		<div className='steps step-two'>
		<div className='step-img'>
				<img src={Design}/>
			</div>
			<div className='step-content'>
				<h3>Step 2</h3>
				<h3>Structure Design and permits approval</h3>
				<p>Once the decision is made on where the pool will be built and the design it will have, we will proceed to preliminary, and when the client accepts it, the plans will be submitted to the city.</p>
			</div>
			
		</div>

		<div className='steps step-three'>
			<div className='step-content'>
				<h3>Step 3</h3>
				<h3>Pool construction</h3>
				<p>Once all the permits are approved, we will proceed with the pool's construction. This consists of excavation, formwork, foundation, installation of tiles, and completion of permits.</p>
			</div>
			<div className='step-img'>
				<img src={Construction}/>
			</div>
		</div>

	</section>
  )
}

export default Process