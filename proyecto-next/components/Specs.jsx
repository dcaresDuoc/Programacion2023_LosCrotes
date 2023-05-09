import React from 'react'
import { Cards } from './index'

const Specs = () => {
  return (
  <div className='container-specs'>
    <div className='input-specs'>
      <input type="text" placeholder='Especifica tu problema' />

     </div>
      <div className='content-specs'>
        <Cards/>


      </div>
  </div>
  )
}

export default Specs
