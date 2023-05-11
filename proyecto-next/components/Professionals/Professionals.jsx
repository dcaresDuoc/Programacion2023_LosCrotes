import React, { useState } from "react";

const professionals = [
  { id: 1, name: "Juan Pérez", area: "Diseño Gráfico", hourlyRate: 300, region: "Metropolitana", commune: "Santiago", country: "Chile" },
  { id: 2, name: "María González", area: "Diseño Web", hourlyRate: 500, region: "Valparaíso", commune: "Viña del Mar", country: "Chile" },
  { id: 3, name: "Pedro Rodríguez", area: "Desarrollo Web", hourlyRate: 800, region: "Nuevo León", commune: "Monterrey", country: "México" },
  { id: 4, name: "Ana Gutiérrez", area: "Marketing Digital", hourlyRate: 700, region: "Metropolitana", commune: "Las Condes", country: "Chile" },
  { id: 5, name: "Rosa Alvarado Priego", area: "Diseño Gráfico", hourlyRate: 300, region: "Metropolitana", commune: "Santiago", country: "Chile" },
  { id: 6, name: "Aroa Lluch-Vall", area: "Diseño Web", hourlyRate: 500, region: "Valparaíso", commune: "Viña del Mar", country: "Chile" },
  { id: 7, name: "Bernardita Lluch Aguilera", area: "Desarrollo Web", hourlyRate: 800, region: "Nuevo León", commune: "Monterrey", country: "México" },
  { id: 8, name: "Marcela Palacio Calzada", area: "Marketing Digital", hourlyRate: 700, region: "Metropolitana", commune: "Las Condes", country: "Chile" },
  { id: 9, name: "Amada Guillén Mascaró", area: "Diseño Gráfico", hourlyRate: 300, region: "Metropolitana", commune: "Santiago", country: "Chile" },
  { id: 10, name: "Charo Elorza-Campoy", area: "Diseño Web", hourlyRate: 500, region: "Valparaíso", commune: "Viña del Mar", country: "Chile" },
  { id: 11, name: "John Smith", area: "Diseño Gráfico", hourlyRate: 400, region: "California", commune: "Los Angeles", country: "Estados Unidos" },
  { id: 12, name: "Maria Garcia", area: "Diseño Web", hourlyRate: 600, region: "Andalucía", commune: "Sevilla", country: "España" },
  { id: 13, name: "Peter Johnson", area: "Desarrollo Web", hourlyRate: 900, region: "London", commune: "London", country: "Reino Unido" },
  { id: 14, name: "Anna Müller", area: "Marketing Digital", hourlyRate: 750, region: "Bavaria", commune: "Munich", country: "Alemania" },
];

function Professionals() {
  const [filters, setFilters] = useState({
    name: "",
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
      name: "",
      area: "",
      hourlyRate: "",
      region: "",
      commune: "",
      country: "",
    });
  };

  const filteredProfessionals = professionals.filter((professional) => {
    return (
      (filters.name === "" || professional.name.toLowerCase().startsWith(filters.name.toLowerCase())) &&
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
            Name:
            <input type="text" name="name" value={filters.name} onChange={handleFilterChange} />
          </label>
          <br />
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