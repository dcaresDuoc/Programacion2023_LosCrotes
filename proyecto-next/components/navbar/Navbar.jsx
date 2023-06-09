'use client'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/FindSome.png'
import Man from '../../public/man.png'
import { SlMenu } from 'react-icons/sl'
import { useState} from 'react' 
import { IoIosArrowDown } from 'react-icons/io'
import useUser from '../../hooks/useUser'
import axios from 'axios'
import { useScroll } from '../../hooks/useScroll';
import { useSlug } from '@/hooks/useSlug'
import { useRouter } from 'next/router'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const { slug } = useSlug()
  const { user, mutate} = useUser()
  const { visible } = useScroll()

  const router = useRouter()

  const routesWithBar = ['/login']
  const showNavbar = routesWithBar.includes(router.pathname)

  const handleLogout = async () => {
    try {
      await axios.get('/api/auth/logout');
      mutate()
    } catch (error) {
      console.error(error);
    }
  };

  if (showNavbar){
    return null
  }


  return (
    <div className={`nav-section ${visible ? 'nav-section' : 'hidden'}`}>
      <div className="nav-container">

        <Image onClick={() => router.push('/') }className='logo' src={Logo} alt='logo de la empresa' width={100} height={60} />

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
                      <Link href={`/servicios/${category.slug}`}>
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
 