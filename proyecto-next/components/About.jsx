
import Image from 'next/image'
import NotePhoto from '../public/note-code.jpg'
import TablePhoto from '../public/table-code.jpg'
import Logo from '../public/FindSome.png'

const About = () => {
  return (
    <div className='section-about'>
      <div className='container-info'>
        <div className='left-info'>
          <div className='container-about' style={{ margin: '20px'}}>
            <h2>Acerca de</h2>
            <Image src={Logo} alt='logo de la empresa' width={140} height={100}/>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center'}}>
          <Image className='note-img' src={NotePhoto} alt={NotePhoto} width={500} height={320} style={{marginRight: '10px'}}/>

          <Image className='tablet-img' src={TablePhoto} alt={TablePhoto} width={500} height={320} style={{marginLeft: '10px'}}/>
          </div>
        </div>
        <div className='right-info' style={{ textAlign: 'right', margin: '90px' }}>
        <h1>Nuestros profesionales</h1>
        </div>
        <div className='container-info' style={{ textAlign: 'right', margin: '20px' }}>
          <p>Bienvenido a Findsome, una empresa de servicios de entrega a domicilio que ofrece una amplia variedad de opciones para satisfacer tus necesidades. Nos enorgullecemos de ofrecer servicios de alta calidad a nuestros clientes y nos esforzamos por garantizar que cada entrega sea rápida, segura y eficiente.
          Queremos compartir nuestra historia contigo. Findsome fue fundada por un grupo de profesionales dedicados a brindar servicios excepcionales a la comunidad. Desde entonces, hemos trabajado incansablemente para mejorar nuestros servicios y satisfacer las necesidades de nuestros clientes.
          En Findsome, creemos en la importancia de la calidad y el compromiso con el cliente. Nos aseguramos de que nuestros profesionales sean altamente capacitados y experimentados, y trabajamos en estrecha colaboración con nuestros clientes para garantizar su satisfacción. Además, nos esforzamos por mantenernos al día con las últimas tendencias y tecnologías para mejorar continuamente nuestros servicios.
          Aquí podrás conocer a nuestro equipo de profesionales y descubrir cómo trabajamos para brindarte los mejores servicios. También puedes leer sobre los valores que nos impulsan y cómo estos valores se reflejan en todo lo que hacemos.
          En Findsome, estamos comprometidos a brindar un servicio excepcional y satisfacer las necesidades de nuestros clientes en todo momento. Nos enorgullece ser una empresa de confianza y esperamos trabajar contigo en tus próximos proyectos de entrega a domicilio. ¡Gracias por confiar en Findsome!</p>
          <button className='btn-text'>Conocer Más</button>
        </div>
      </div>
    </div>
  )
}

export default About