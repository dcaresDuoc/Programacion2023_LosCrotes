import React, { useState } from "react";

const professionals = [
  { id: 1, name: "Juan Pérez", area: "Diseño Gráfico", hourlyRate: 300, region: "Metropolitana", commune: "Santiago", country: "Chile" },
  { id: 2, name: "María González", area: "Diseño Web", hourlyRate: 500, region: "Valparaíso", commune: "Viña del Mar", country: "Chile" },
  { id: 3, name: "Pedro Rodríguez", area: "Desarrollo Web", hourlyRate: 800, region: "Nuevo León", commune: "Monterrey", country: "México" },
  { id: 4, name: "Ana Gutiérrez", area: "Marketing Digital", hourlyRate: 700, region: "Metropolitana", commune: "Las Condes", country: "Chile" },
];

function Professionals() {
  const [filters, setFilters] = useState({
    area: "",
    hourlyRate: "",
    region: "",
    commune: "",
    country: "",
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleResetFilters = () => {
    setFilters({
      area: "",
      hourlyRate: "",
      region: "",
      commune: "",
      country: "",
    });
  };

  const filteredProfessionals = professionals.filter((professional) => {
    return (
      (filters.area === "" || professional.area.toLowerCase().startsWith(filters.area.toLowerCase())) &&
      (filters.hourlyRate === "" || professional.hourlyRate <= filters.hourlyRate) &&
      (filters.region === "" || professional.region.toLowerCase().startsWith(filters.region.toLowerCase())) &&
      (filters.commune === "" || professional.commune.toLowerCase().startsWith(filters.commune.toLowerCase())) &&
      (filters.country === "" || professional.country.toLowerCase().startsWith(filters.country.toLowerCase()))
    );
  });

  

  return (
    <div className="container-pro">
      <h1>Search for Professionals</h1>
      
      <div className="low-section">
        <form className="form-pro">
          <label>
            Area:
            <input type="text" name="area" value={filters.area} onChange={handleFilterChange} />
          </label>
          <br />
          <label>
            Hourly Rate:
            <input type="number" name="hourlyRate" value={filters.hourlyRate} onChange={handleFilterChange} />
          </label>
          <br />
          <label>
            Region:
            <input type="text" name="region" value={filters.region} onChange={handleFilterChange} />
          </label>
          <br />
          <label>
            Commune:
            <input type="text" name="commune" value={filters.commune} onChange={handleFilterChange} />
          </label>
          <br />
          <label>
            Country:
            <input type="text" name="country" value={filters.country} onChange={handleFilterChange} />
          </label>
          <br />
          <button type="button" onClick={handleResetFilters}>
            Reset Filters
          </button>
        </form>
        <ul>
          {filteredProfessionals.map((professional) => (
            <li key={professional.id}>
              {professional.name}, {professional.area},
              {professional.hourlyRate} USD/hour, {professional.commune}, {professional.region}, {professional.country}
            </li>
          ))}
        </ul>
      </div>
</div>
);
}

export default Professionals;