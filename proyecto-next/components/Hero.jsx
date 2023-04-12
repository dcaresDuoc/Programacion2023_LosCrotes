import Image from 'next/image'
import Photo from '../public/man.png'
import { InfoNav } from './index' 
const Hero = () => {
  return (
    <div className='section'>
      <div className='container-hero'>
        <div className='left'>
          <h1>Encuentra el profesional que necesitas</h1>
          <div>
            <h2>Mision principal</h2>
          </div>
          <p>es brindar el profesional que mejor se adapte a tu entorno de trabajo</p>
        </div>
        <div className='right'> 
          <Image src={Photo} alt={Photo} width={500} height={350}/>
        </div>
      </div>
      <InfoNav />
    </div>
  )
}

export default Hero