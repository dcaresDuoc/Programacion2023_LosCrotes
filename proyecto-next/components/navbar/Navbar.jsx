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
  const { user } = useUser()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  // console.log(openMenu)
  // console.log(visible)
  console.log(user)


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
              Profesionales
            </Link>
          </li>
          <li className="item">
            <Link href='/profesionales'>
              Productos
            </Link>
              <ul className='dropdown'>
                <li>
                  <Link href="/productos/producto-1">
                    Producto 1
                  </Link>
                </li>
                <li>
                  <Link href="/productos/producto-2">
                    Producto 2
                  </Link>
                </li>
                <li>
                  <Link href="/productos/producto-3">
                    Producto 3
                  </Link>
                </li>
                <li>
                  <Link href="/productos/producto-1">
                    Producto 1
                  </Link>
                </li>
                <li>
                  <Link href="/productos/producto-2">
                    Producto 2
                  </Link>
                </li>
                <li>
                  <Link href="/productos/producto-3">
                    Producto 3
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
 