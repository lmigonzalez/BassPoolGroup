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
				<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
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
				<h3>Evaluation and Estimates</h3>
				<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
			</div>
			
		</div>

		<div className='steps step-three'>
			<div className='step-content'>
				<h3>Step 3</h3>
				<h3>Evaluation and Estimates</h3>
				<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
			</div>
			<div className='step-img'>
				<img src={Construction}/>
			</div>
		</div>

	</section>
  )
}

export default Process