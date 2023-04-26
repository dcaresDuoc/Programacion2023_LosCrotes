import Photo from '../public/man.png'
import Image from 'next/image'

const Cards = ({users}) => {
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
