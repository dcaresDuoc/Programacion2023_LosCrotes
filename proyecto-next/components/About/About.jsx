import Image from 'next/image'
import React from 'react';
import { creadores } from '../../utils/creadores.js'


const About = () => {
  return (
  <div className='container-about'>
    <h1>"Expertos en Soluciones: Tu aliado confiable para servicios profesionales"</h1>
    

    <div className='boxes'>
      <div className='historia'>
        <p>
          En un rincón del mundo empresarial nació nuestra empresa, 
          con la visión de transformar la forma en que las personas 
          acceden a servicios profesionales. Con pasión y dedicación, 
          hemos creado una plataforma innovadora y 
          fácil de usar que conecta a clientes con profesionales 
          altamente capacitados. Nos enorgullece ser reconocidos como 
          líderes en nuestro sector, brindando soluciones de alta 
          calidad y experiencias gratificantes. Nuestra historia es un 
          testimonio de nuestro compromiso con la excelencia y la 
          pasión por marcar una diferencia positiva en la vida de las 
          personas. Únete a nosotros en esta emocionante aventura 
          mientras creamos juntos un futuro brillante y exitoso.
        </p>
      </div>

      <h2> Nuestros Creadores</h2>

      <div className='partners'>
        {creadores.map(creador => (
          <div>
            <Image src={creador} alt='Creadores imagenes' width={300} height={100}/>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default About