import React from 'react'
import { Cards } from './index'
import Image from 'next/image'
import ImageInput from '../public/imaginput.jpeg'

const Specs = () => {
  return (
  <div className='container-specs'>
    <div className='input-specs'>
      <Image src={ImageInput} alt='poto caca peo' width={800} height={450}/>
      <input type="text" placeholder='Especifica tu problema' />

     </div>
      <div className='content-specs'>
        <Cards/>


      </div>
  </div>
  )
}

export default Specs
