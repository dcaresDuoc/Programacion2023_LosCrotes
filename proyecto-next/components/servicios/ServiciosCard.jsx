import Link from 'next/link'

const ServiciosCard = ({slug ,nombre, descripcion}) => {
  return (
    <Link href={`/servicios/categorias/${slug}`}>
        <div className='cartas'>
          <h2>{nombre}</h2>
          <p>{descripcion}</p>
        </div>
    </Link>
  )
}

export default ServiciosCard
