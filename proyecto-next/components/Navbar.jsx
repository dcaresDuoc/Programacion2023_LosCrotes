import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/findSome.png'
import { useState, useEffect } from 'react'
import Man from '../public/man.png'

const Navbar = ({data}) => {
  const [session, setSession] = useState(false)


  useEffect(() => {
    const storedInfo = window.localStorage.getItem('user')
  })

  return (
    <div className='container-nav'>
      <div className='nav-logo'>
        <Link href='/'>
          <Image src={Logo} alt={Logo} width={100} height={50}/>
        </Link>
      </div>

      <div className='box-link'>
        <div className='links'>
          <span>Carreras</span>
          <span>Institutos</span>
          <span>Universidades</span>
          <span>Profesionales</span>
          <span>Empresas</span>
        </div>

        <div className='sessions'>
          <Link href='/register'>
            <span>Registrarse</span>
          </Link>
          <Link href='/login'>
            <span>Iniciar sesion</span>
          </Link>
        </div>

        {/* <div className='session-active' >
          <div className='user-img'>
            <Image src={Man} alt='' width={100} height={100}/>
          </div>
          <h1>Persona</h1>
          <span>Cerrar Session</span>    
        </div> */}
      
      </div>

    </div>
  )
}

export default Navbar