import React, {useState} from 'react'
import { Button } from 'react-bootstrap'

import {AiFillStar, AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import { BsStarHalf } from "react-icons/bs"





import './Testimonials.css'

function Testimonials() {

	const testimonials= [
		{
			comment : "Bass Pool was a terrific experience for me. Throughout the construction phase, we had a great time. Everything went according to plan in terms of logistics. There didn't seem to be a day when the pool wasn't being worked on somehow, shape or style.",
			author: "MARIA PINO",
			rate: 5,
		}, 
		{
			comment : "I wanted to express my gratitude to Bass Pool for their excellent service. I was a skeptic at first, but everything has turned out fantastic. We've always been able to reach everyone and have had a great time doing so. They have excelled and gone above and beyond my expectations.",
			author: "JUAN CARLOS SANDOVAL",
			rate: 4.5,
		},
		{
			comment : "Bass Pool ha hecho un trabajo excepcional, en mi opinión. Mi esposa y yo presentamos varias ofertas, pero Bass Pool fue la más competitiva y nos guiaron durante todo el proceso. ¡Estamos bastante satisfechos con lo que tenemos actualmente! ¡Bass Pool es altamente recomendado por mí!",
			author: "EL CHINO",
			rate: 5,
		}
	]


	const [num, setNum] = useState(0)
	const [value, setValue] = useState(testimonials[num])

	const nextTestimonial = () =>{
		if(num === 2){
			setNum(0)
			setValue(testimonials[num])
			return
		}
		setNum(num + 1)
		setValue(testimonials[num])
	}

	const previousTestimonial = () =>{
		if(num === 0){
			setNum(2)
			setValue(testimonials[num])
			return
		}
		setNum(num - 1)
		setValue(testimonials[num])
	}



  return (
	<section className='testimonials-container'>
		<h2>Trusted by hundreds over years</h2>
		<h4>We have hundreds of satisfied clients. Their testimonials speak for themselves.</h4>

		<div className='testimonials-content'>
			<div className='testimonial' >
			<p>{value.comment}</p> 
			<div className='stars'>
			{  value.rate === 5 ? 
			<>
			 <AiFillStar className='star'/> 
			 <AiFillStar className='star'/> 
			 <AiFillStar className='star'/> 
			 <AiFillStar className='star'/> 
			 <AiFillStar className='star'/> 
			 </>
			
			
			 :
			 <>
			 <AiFillStar className='star'/> 
			 <AiFillStar className='star'/> 
			 <AiFillStar className='star'/> 
			 <AiFillStar className='star'/> 
			 <BsStarHalf className='star'/> 
			 </>
			
			 
			
			}
			
			</div>

			<p>{value.author}</p>
			

			</div>
			<div className='testimonials-btn'>
				<Button onClick={previousTestimonial}> <AiOutlineArrowLeft className='icon'/> </Button>
				<Button onClick={nextTestimonial}> <AiOutlineArrowRight className='icon'/></Button>
			</div>

		</div>

	</section>
  )
}

export default Testimonials