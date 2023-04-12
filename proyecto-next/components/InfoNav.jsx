import Link from 'next/link'

const InfoNav = () => {
  return (
    <div className="info-nav">
      <div className="box-text">
        <h1>Encuentra un informatico</h1>
        <p>Nuestro profesionales informaticos registados son 200.000, encuentralo <Link href='/pro'>aqui</Link></p>
      </div>

      <div className='filtro-1'>
        filtro 1
      </div>

      <div className='filtro-2'>
        filtro 2
      </div>

      <button className='btn-search'>
        Search
      </button>

    </div>
  )
}

export default InfoNav