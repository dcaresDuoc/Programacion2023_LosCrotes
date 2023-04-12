import React from 'react'
import { Cards } from './index'
import axios from 'axios'

const Workers = ({data}) => {
  return (
    <div className='section-work'>
      <div className='container-workers'>
        <div className='text-work'>
          <h1>Ultimas noticias</h1>
          <span>
            Enterate de los ultimos eventos y noticias
          </span>
        </div>

        <Cards users={data}/>
      </div>
    </div>
  )
}

export default Workers
