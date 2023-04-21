import React from 'react'
import { Workers, NavAbout } from './index'


const Footer = ({data}) => {
  return (
    <div className='section-footer'>
      <Workers data={data}/>
      <NavAbout />
    </div>
  )
}

export default Footer