import React from 'react'

import './Home.css'

import Hero from './Hero'
import FreeEstimate from './FreeEstimate'
import Gallery from './Gallery'
import Process from './Process'
import Testimonials from './Testimonials'


function Home() {
  return (
	<>
  <Hero/>
  <FreeEstimate/>
  <Gallery/>
  <Process/>
  <Testimonials/>
  </>
  )
}

export default Home