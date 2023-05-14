import React, { useState, useEffect } from "react";
import { userData } from '../../utils/userData'
import Cards from '../Cards'
import TextField from '@mui/material/TextField';


function Professionals() {
  const [profesionales, setProfesionales] = useState([])

  useEffect(() => {
    async function getData(){
      const newData = await userData()
      setProfesionales(newData)
    }

    getData()

  }, [])

  const [filters, setFilters] = useState({
    nombre: "",
    profesion: "",
    region: "",
    comuna: "",
    cuidad: "",
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleResetFilters = () => {
    setFilters({
      nombre: "",
      profesion: "",
      region: "",
      comuna: "",
      cuidad: "",
    });
  };

  const filteredProfessionals = profesionales.filter((profesionales) => {
    return (
      (filters.nombre === "" || profesionales.nombre.toLowerCase().startsWith(filters.nombre.toLowerCase())) &&
      (filters.profesion === "" || profesionales.profesion.toLowerCase().startsWith(filters.profesion.toLowerCase())) &&
      (filters.region === "" || profesionales.region.toLowerCase().startsWith(filters.region.toLowerCase())) &&
      (filters.comuna === "" || profesionales.comuna.toLowerCase().startsWith(filters.comuna.toLowerCase())) &&
      (filters.cuidad === "" || profesionales.cuidad.toLowerCase().startsWith(filters.cuidad.toLowerCase()))
    );
  });

  

  return (
    <div className="container-pro">
      <h1 className="title">Search for Professionals</h1>
      
      <div className="low-section">
        <form className="form-pro">
          <input type="text" name="profesion" value={filters.profesion} placeholder="Profesion" onChange={handleFilterChange} />
          <input type="text" name="region" value={filters.region} placeholder="Region" onChange={handleFilterChange} />
          <input type="text" name="comuna" value={filters.comuna} placeholder="Comuna" onChange={handleFilterChange} />
          <input type="text" name="cuidad" value={filters.cuidad} placeholder="Cuidad" onChange={handleFilterChange} />
        <button type="button" onClick={handleResetFilters}>
          Reset Filters
        </button>
      </form>
      <div className="box-profesional">
        {filteredProfessionals.map((profesional) => (
          <Cards key={profesional.id_profesional} id={profesional.id_profesional} profesion={profesional.profesion} name={profesional.nombre} email={profesional.correo_electronico} bio={profesional.biografia}/>
        ))}
      </div>
    </div>
</div>
);
}

export default Professionals;