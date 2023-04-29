'use client'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/FindSome.png'
import { SlMenu } from 'react-icons/sl'
import { useState } from 'react' 
import { IoIosArrowDown } from 'react-icons/io'


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  console.log(openMenu)


  return (
    <div className={`${openMenu ? 'active' : ''} nav-section`}>
      <div className="nav-container">

        <div className="logo-brand">
          <Link href='/'>
            <Image src={Logo} alt='logo de la empresa' width={100} height={60}/>
          </Link>
        </div>

        <ul className={`${openMenu ? 'active' : ''} links`}>
          
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
            <Link href="/contactform">
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
 