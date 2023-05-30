import { useState, useEffect } from 'react'
import { Cards } from './index'
import diacritic from 'diacritic'
import { usePro } from '@/hooks/usePro'

const Specs = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const { profesionales } = usePro()

  const handleSearch = () => {
    const searchTermArray = searchTerm.toLowerCase().split(' ');

    const relevantProfessionals = profesionales.filter(professional => {
      const bioArray = diacritic.clean(professional.biografia.toLowerCase()).split(' ')
      let matchCount = 0;
      searchTermArray.forEach(word => {
        if (bioArray.includes(diacritic.clean(word))) {
          matchCount++;
        }
      });
      professional.matchCount = matchCount;
      return matchCount > 0;
    });

    relevantProfessionals.sort((a, b) => b.matchCount - a.matchCount);

    return relevantProfessionals;
  };


  return (
    <div className='container-specs'>
      <div className='input-specs'>
        <input type="text" placeholder='Especifica tu problema' onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>
      <div className='content-specs'>
          {handleSearch().map((profesional) => (
            <Cards key={profesional.id_profesional} id={profesional.id_profesional} profesion={profesional.profesion} name={profesional.nombre} email={profesional.correo_electronico} bio={profesional.biografia}/>
          ))}
      </div>
    </div>
  )
}

export default Specs
