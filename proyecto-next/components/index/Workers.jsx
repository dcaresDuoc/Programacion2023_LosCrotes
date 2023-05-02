import React from 'react'
import { Slicer } from '../index'
import axios from 'axios'

const Workers = () => {
  return (
    <div className='section-work'>
      <div className='container-workers'>
        <div className='text-work'>
          <h1>Ultimas noticias</h1>
          <span>
            Enterate de los ultimos eventos y noticias
          </span>
        </div>

        <Slicer />
      </div>
    </div>
  )
}

export default Workers
