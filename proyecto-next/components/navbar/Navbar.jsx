'use client'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/FindSome.png'
import { SlMenu } from 'react-icons/sl'
import { useState, useEffect } from 'react' 
import { IoIosArrowDown } from 'react-icons/io'
import useUser from '../../hooks/useUser'


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  // const { user } = useUser()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  

  return (
    <div className={`${openMenu ? 'active' : ''} nav-section ${visible ? 'nav-section' : 'hidden'}`}>
      <div className="nav-container">

        <div className="logo-brand">
          <Link href='/'>
            <Image src={Logo} alt='logo de la empresa' width={100} height={60}/>
          </Link>
        </div>

        <ul className={`${openMenu ? 'active' : ''} links`}>
          
          <li className="item">
            <Link href="/professionals">
              Buscar profesionales
            </Link>
          </li>
          <li className="item">
            <Link href="/specs">
              Especifica tu problema
            </Link>
          </li>
          <li className="item">
            <Link href='/profesionales'>
              Servicios
            </Link>
              <ul className='dropdown'>
                <li>
                  <Link href="/productos/producto-1">
                    Servicios eléctricos
                  </Link>
                </li>
                <li>
                  <Link href="/productos/producto-2">
                    Informática y Telecomunicaciones
                  </Link>
                </li>
                <li>
                  <Link href="/productos/producto-3">
                    Servicios de Salud
                  </Link>
                </li>
                <li>
                  <Link href="/productos/producto-1">
                    Servicios de mecánica
                  </Link>
                </li>
                <li>
                  <Link href="/productos/producto-2">
                    Asesorías y Negocios
                  </Link>
                </li>
                <li>
                  <Link href="/productos/producto-3">
                    Construcción
                  </Link>
                </li>
                <li>
                  <Link href="/productos/producto-3">
                    Diseño
                  </Link>
                </li>
                <li>
                  <Link href="/productos/producto-3">
                    Gastronomía
                  </Link>
                </li>
                <li>
                  <Link href="/productos/producto-3">
                    Servicios de ingeniería
                  </Link>
                </li>
                <li>
                  <Link href="/productos/producto-3">
                    Comunicaciones
                  </Link>
                </li>
              </ul>
          </li>
          <li className="item">
            <Link href="/about">
              Acerca de
            </Link>
          </li>
          <li className="item">
            <Link href="/contact">
              Contacto
            </Link>
          </li>
        </ul>


        <div className={`${openMenu ? 'active' : ''} session-btn`}>
        
          <div className='signup-session'>
            <Link href='/login'>
              Sign Up
            </Link>
          </div>

          <div className='register-session'>
            <Link href='/register'>
              Register
            </Link>
          </div>
        </div>

        <div className='icons-menu' onClick={() => setOpenMenu(!openMenu)}>
          {!openMenu 
            ? <SlMenu />
            : <IoIosArrowDown />      
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
 