import React, { useState } from 'react';
import Image from 'next/image'
import Logo from '../public/FindSome.png'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

function Contact() {  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const router = useRouter()


  const handleChange = ({ target: {name, value}}) => {
    setFormData ({...formData, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.post('/api/contact', formData)
      Swal.fire({
        icon: 'success',
        title: 'Registro completado exitosamente'
      }).then((response) => {
        if(response){
          setFormData(null)
        }
      })
    } catch (err) {
      console.error(err.response.data.message)
      Swal.fire({
        icon: 'error',
        title: err.response.data.message
      })
    }
  }

  console.log(formData)
  return (
    <div className='container-contact'>

      <div className='contact-text'>
        
        <div>
          <h1>Chatea con nosotros</h1>
          <h5>Uno de nuestro equipo estará para ayudarte</h5>
          <span>hi@findsome.cl</span>
        </div>

        <div>
          <h1>Visitanos</h1>
          <h5>Ven a saludarnos en nuestra sede</h5>
          <span>Antonio Varas 666, Providencia, Región Metropolitana2</span>
        </div>

        <div>
          <h1>Llamanos</h1>
          <h5>Atenderemos de Lun-Vier de 8am a 4pm</h5>
          <span>+569 221234812</span>

        </div>

      </div>

      <div className='form-contact'>
        <h1>¿Deseas comunicarte con nosotros?</h1>
        <h5>Rellena este formulario y obtendras las respuestas que necesites,
            te comunicarás con nuestro personal y todas tus dudas serán resultas
        </h5>
        <form  onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input type='text' name='name' onChange={handleChange}/>
            {/* {errors.nombre && <span>Este campo es obligatorio</span>} */}
          </label>

          <label>
            Correo electrónico:
            <input
              type="email"
              name="email"
              onChange={handleChange}
            />
            {/* {errors.email && <span>Este campo es obligatorio</span>} */}
          </label>

          <label>
            Mensaje:
            <textarea name="message" onChange={handleChange} />
            {/* {errors.mensaje && <span>Este campo es obligatorio</span>} */}
          </label>

          <button type="submit">Enviar</button>
        </form>
      </div>

    </div>


    // <div className='section-about'>
    //   <div className='container-info'>
    //     <div className='left-info'>
    //     <div style={{ display: 'flex', alignItems: 'center' }}>
    //       <Image src={Logo} alt='logo de la empresa' width={140} height={100} />
    //       <h2 style={{ color: 'purple' }}>Formulario de Contacto</h2>
    //     </div>
    //   </div>
    // </div>
    // </div><div className='form-container' style={{display: 'flex', alignItems: 'center'}}>
    //   <form onSubmit={handleSubmit} className="contact-form">
    //     <div className="form-group">
    //       <label htmlFor="name">Name:</label>
    //       <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
    //     </div>

    //     <div className="form-group">
    //       <label htmlFor="email">Email:</label>
    //       <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
    //     </div>

    //     <div className="form-group">
    //       <label htmlFor="message">Message:</label>
    //       <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="form-control" />
    //     </div>

    //     <button type="submit" className="btn">Send</button>
    //     <button className='btn-text'>
    //       <Link href='/'>Vuelve al Home</Link>
    //     </button>
    //   </form>
    // </div>
  );
  
}

export default Contact;
