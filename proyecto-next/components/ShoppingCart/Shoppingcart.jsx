import Image from 'next/image'
import Photo from '../../public/shoppingcart.png'

const Hero = () => {
  return (
    <div className='section'>
      <div className='container-hero'>
        <div className='left'>
          <h1>Reserva tu hora con expertos</h1>
          <div>
            <h2>Encuentra y reserva citas con profesionales en línea</h2>
          </div>
          <p>Ahorra tiempo y agenda fácilmente tu próxima consulta con nuestra plataforma de reservas en línea con profesionales técnicos</p>
        </div>
        <div className='right'> 
          <Image src={Photo} alt={Photo} width={500} height={350}/>
        </div>
      </div>
    </div>

  )
}

export default Hero