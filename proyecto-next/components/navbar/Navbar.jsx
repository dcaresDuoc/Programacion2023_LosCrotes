'use client'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/FindSome.png'
import Man from '../../public/man.png'
import { SlMenu } from 'react-icons/sl'
import { useState, useEffect } from 'react' 
import { IoIosArrowDown } from 'react-icons/io'
import useUser from '../../hooks/useUser'
import Photo from '../../public/shoppingcart.png'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useScroll } from '../../hooks/useScroll';
import { useSlug } from '@/hooks/useSlug'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const { slug } = useSlug()
  const { user, mutate} = useUser()
  const { visible } = useScroll()

  
  const router = useRouter()

  const routesWithBar = ['/', '/profesionales', '/specs','/servicios','/servicios', '/contacto']
  const showNavbar = routesWithBar.includes(router.pathname)

  const handleLogout = async () => {
    try {
      await axios.get('/api/auth/logout');
      mutate()
    } catch (error) {
      console.error(error);
    }
  };

  if (!showNavbar){
    return null
  }


  return (
    <div className={`${openMenu ? 'active' : ''} nav-section ${visible ? 'nav-section' : 'hidden'}`}>
      <div className="nav-container">

        <div className="logo-brand">
          <Link href='/'>
            <Image src={Logo} alt='logo de la empresa' width={100} height={60}/>
          </Link>
        </div>

        {!user ? (
          <>
          <ul className={`${openMenu ? 'active' : ''} links`}>
            <li className="item">
              <Link href="/profesionales">
                Buscar profesionales
              </Link>
            </li>
            <li className="item">
              <Link href="/specs">
                Especifica tu problema
              </Link>
            </li>
            <li className="item">
              <Link href='/servicios'>
                Servicios
              </Link>
              <ul className='dropdown'>
                  {slug.map(category => (
                    <li key={category.slug}>
                      <Link href={`/servicios/cat=${category.slug}`}>
                        {category.nombre}
                      </Link>
                    </li>
                  ))}
              </ul>  
            </li>
            <li className="item">
              <Link href="/about">
                Acerca de
              </Link>
            </li>
            <li className="item">
              <Link href="/contacto">
                Contacto
              </Link>
            </li>
          </ul>

          <div className={`${openMenu ? 'active' : ''} session-btn`}>
            <div className='signup-session'>
              <Link href='/login'>
                Sign In
              </Link>
            </div>

            <div className='register-session'>
              <Link href='/register'>
                Sign Up
              </Link>
            </div>
          </div>
          </>
        ) : (
          <>
            <ul className={`links`}>
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
            </ul>

            <div className='detail-user'>
              <div className='user-img'>
                <Image src={Man} alt='logo de la empresa' width={100} height={60}/>
              </div>

              <h3>{user.nombre}</h3>
              <button onClick={handleLogout}>Logout</button>
            </div>

            
          </>
        )}
        
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
 