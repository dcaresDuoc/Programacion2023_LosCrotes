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
    <main className='app'>
      <Hero />
      <AboutSection />
      <InfoBrand />
      <Workers />
      <Footer />
    </main>
  )
}

export default index
