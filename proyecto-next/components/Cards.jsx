import Photo from '../public/man.png'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {userData} from '../utils/userData'

const Cards = ({id, photo, name, email}) => {
  return (
    <div className="cards">
      <div className='card' key={id}>
        <div className='card-img'>
          <Image src={Photo} alt='imagen de persona adulta' width={270} height={200}/>
        </div>
        <div className='card-info'>
          <h1>{name}</h1>
          <h2>{email}</h2>
        </div>
      </div>
    </div>
  )
}


export default Cards
