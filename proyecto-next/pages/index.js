'use client'
import React from 'react'
import {Navbar,
  Hero,
  InfoBrand,
  AboutSection,
  Workers,
  Footer,
  Slicer} from '../components/index'
import axios from 'axios'


const index = ({data}) => {
  return (
    <div className='app'>
      {/* <Navbar /> */}
      <Hero />
      <AboutSection />
      <InfoBrand />
      <Workers />
      <Footer />
    </div>
  )
}

export default index
