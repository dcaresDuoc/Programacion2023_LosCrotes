import { useState } from 'react';
import Image from 'next/image'
import Logo from '../../public/FindSome.png'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { SlBubbles, SlLocationPin, SlPhone} from 'react-icons/sl'

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

      <div className="logo-brand">
        <Link href='/'>
          <Image src={Logo} alt='logo de la empresa' width={100} height={60}/>
        </Link>
      </div>  

      <div className='contact-text'>
        
        <div>
          <SlBubbles className='icon'/>
          <h1>Chatea con nosotros</h1>
          <h5>Uno de nuestro equipo estará para ayudarte</h5>
          <span>hi@findsome.cl</span>
        </div>

        <div>
          <SlLocationPin className='icon'/>
          <h1>Visitanos</h1>
          <h5>Ven a saludarnos en nuestra sede</h5>
          <span>Antonio Varas 666, Providencia, Región Metropolitana2</span>
        </div>

        <div>
          <SlPhone className='icon'/>
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
            <input type='text' name='name' placeholder='Ingresa tu nombre' onChange={handleChange} required/>
            {/* {errors.nombre && <span>Este campo es obligatorio</span>} */}

            <input type="email" name="email" placeholder='Ingresa tu correo' onChange={handleChange} required/>
            {/* {errors.email && <span>Este campo es obligatorio</span>} */}

            <textarea name="message" placeholder='Ingresa el mensaje que deseas enviar' onChange={handleChange} required/>
            {/* {errors.mensaje && <span>Este campo es obligatorio</span>} */}


          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
  
}

export default Contact;
