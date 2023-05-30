import Link from 'next/link'
import Photo from '../public/miau.jpg'
import Image from 'next/image'

const Cards = ({ id, photo, name, email, bio, profesion, loading }) => {
  return (
    <div className="cards">
      <Link href={`/profesionales/${id}`}>
       <div className="card">
        <div className="card-info">
          <h1>{name}</h1>
          <h2>{email}</h2>
        </div>
        <div className="card-img">
          <Image src={Photo} alt="imagen de persona adulta" width={270} height={200} />
        </div>
        <div className="card-detail">
          <h5>{profesion}</h5>
          <p>{bio}</p>
        </div>
      </div>
      </Link> 
    </div>
  );
};

export default Cards;
