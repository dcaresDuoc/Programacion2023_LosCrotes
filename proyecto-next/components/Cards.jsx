import Photo from '../public/man.png'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {userData} from '../utils/userData'

const Cards = () => {
  const [users, setUser] = useState([])

  
  useEffect(() => {
    async function getData(){
      const newData = await userData()
      setUser(newData)
    }

    getData()

  }, [])

  console.log(users)

  return (
    <div className="cards">
      {users.map((user) => (
        <div className='card' key={user.idusers}>
          <div className='card-img'>
            <Image src={Photo} alt='imagen de persona adulta' width={270} height={200}/>
          </div>
      
          <div className='card-info'>
            <h1>{user.username}</h1>
            <h2>{user.email}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}


export default Cards
