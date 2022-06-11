import React from 'react'

import Hero from './Hero'
import FreeEstimate from './FreeEstimate'
import Gallery from './Gallery'
import Process from './Process'
import Testimonials from './Testimonials'
import Footer from '../../components/Footer'

function Home() {
  return (
	<>
  <Hero/>
  <FreeEstimate/>
  <Gallery/>
  <Process/>
  <Testimonials/>
  <Footer/>
  </>
  )
}

export default Home