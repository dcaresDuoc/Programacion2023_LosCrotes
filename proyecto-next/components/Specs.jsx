  import { useState, useEffect } from 'react'
  import { Cards } from './index'
  import Image from 'next/image'
  import ImageInput from '../public/imaginput.jpeg'
  import { userData } from '../utils/userData' 

  const Specs = () => {
    const [profesionales, setProfesionales] = useState([])

    useEffect(() => {
      async function getData(){
        const newData = await userData()
        setProfesionales(newData)
      }
  
      getData()
  
    }, [])

    console.log(profesionales)
  

    return (
    <div className='container-specs'>
      <div className='input-specs'>
        <Image src={ImageInput} alt='poto caca peo' width={800} height={450}/>
        <input type="text" placeholder='Especifica tu problema' />

      </div>
        <div className='content-specs'>
          {profesionales.map((profesional) => (
            <Cards id={profesional.idprofesional} name={profesional.nombre} email={profesional.correo_electronico}/>
          ))}
      </div>
    </div>
    )
  }

  export default Specs
