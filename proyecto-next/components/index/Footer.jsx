import Link from 'next/link'
import Logo from '../../public/FindSome.png'
import Image from 'next/image'

const Footer = ({data}) => {
  return (
    <div className='section-footer'>

      <Link href='/'>
            <Image src={Logo} alt='logo de la empresa' width={100} height={60}/>
      </Link>
      <ul className='footer-list'>
        <li><Link href='/'>Inicio</Link></li>
        <li><Link href='/servicios'>Servicios</Link></li>
        <li><Link href='/about'>Acerca de</Link></li>
        <li><Link href='/contacto'>Contacto</Link></li>
      </ul>
      <p>FindSome - Reserva de profesionales técnicos en Chile - © 2023 Todos los derechos reservados</p>
    </div>
  )
}

export default Footer