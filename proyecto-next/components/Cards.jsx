import Photo from '../public/man.png'
import Image from 'next/image'

const Cards = ({id, photo, name, email, bio, profesion}) => {
  return (
    <div className="cards">
      <div className='card'>
        <div className='card-info'>
          <h1>{name}</h1>
          <h2>{email}</h2>
        </div>
        <div className='card-img'>
          <Image src={Photo} alt='imagen de persona adulta' width={270} height={200}/>
        </div>
        <div className='card-detail'>
          <h5>{profesion}</h5>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  )
}


export default Cards
