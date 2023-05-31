
import Image from 'next/image'
import NotePhoto from '../../public/note-code.jpg'
import TablePhoto from '../../public/table-code.jpg'
import { useRouter } from 'next/router'

const AboutSection = () => {
  const router = useRouter()
  
  return (
    <div className='section-brand_about'>
      <div className='container-brand_info'>
        <div className='left-info'>
          <div className='container-brand_about'>
            <h2>Profesionales informaticos</h2>
          </div>
          <Image className='note-img' src={NotePhoto} alt={NotePhoto} width={150} height={150}/>
          <Image className='tablet-img' src={TablePhoto} alt={TablePhoto} width={150} height={150}/>
        </div>

        <div className='right-info'>
          <h1>Profesionales</h1>
          <p>
            ¡Bienvenido! En nuestro sitio web ofrecemos servicios de reserva de horarios a profesionales
            técnicos de diversas áreas. Sabemos lo difícil que puede ser coordinar horarios
              y atender a todos sus clientes de manera eficiente,
            por lo que hemos creado una solución fácil y práctica para que usted pueda
              concentrarse en lo que realmente importa: su trabajo.
          </p>
          <button onClick={() => router.push('/profesionales')} className='btn-text'>Conocer Más</button>
        </div>
      </div>
    </div>
  )
}

export default AboutSection