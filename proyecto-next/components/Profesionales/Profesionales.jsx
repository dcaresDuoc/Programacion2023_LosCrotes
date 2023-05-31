import React, { useState, useMemo } from "react";
import Cards from '../Cards';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';
import { usePagination } from "../../hooks/usePagination";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function Professionals({ profesionales, loading }) {
  const { page, pageSize, setPage, handlePageSizeChange } = usePagination();

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
    setPage(1);
  };

  const handleResetFilters = () => {
    setFilters({
      nombre: "",
      profesion: "",
      region: "",
      comuna: "",
      cuidad: "",
    });
    setPage(1);
  };

  const filteredProfessionals = useMemo(() => {
    if (!profesionales) return [];
    
    return profesionales.filter((profesional) => {
      return (
        (filters.nombre === "" || profesional.nombre.toLowerCase().startsWith(filters.nombre.toLowerCase())) &&
        (filters.profesion === "" || profesional.profesion.toLowerCase().startsWith(filters.profesion.toLowerCase())) &&
        (filters.region === "" || profesional.region.toLowerCase().startsWith(filters.region.toLowerCase())) &&
        (filters.comuna === "" || profesional.comuna.toLowerCase().startsWith(filters.comuna.toLowerCase())) &&
        (filters.cuidad === "" || profesional.cuidad.toLowerCase().startsWith(filters.cuidad.toLowerCase()))
      );
    });
  }, [profesionales, filters]);

  const totalPages = Math.ceil(filteredProfessionals.length / pageSize);

  console.log(filteredProfessionals)

  return (
    <div className="container-pro">
      <h1 className="title">Search for Professionals</h1>

      <div className="low-section">
        <form className="form-pro">
          <TextField color='secondary' label="Profesion" name="profesion" value={filters.profesion} onChange={handleFilterChange} />
          <TextField color='secondary' label="Region" name="region" value={filters.region} onChange={handleFilterChange} />
          <TextField color='secondary' label="Comuna" name="comuna" value={filters.comuna} onChange={handleFilterChange} />
          <TextField color='secondary' label="Ciudad" name="cuidad" value={filters.cuidad} onChange={handleFilterChange} />
          <button type="button" onClick={handleResetFilters}>
            Reset Filters
          </button>
        </form>
        <div className="box-profesional">
          <div className="box-filter_pro">
            <TextField label="Limit" type="number" min={1} value={pageSize} onChange={handlePageSizeChange} />
          </div>

          <div className="box-cards">
          {filteredProfessionals
            .slice((page - 1) * pageSize, page * pageSize)
            .map((profesional) => (
            <div key={profesional.id_profesional}>
              {loading ? (
                <Stack spacing={2}>
                  <Skeleton variant="rectangular" width={210} height={318} />
                  <Skeleton />
                  <Skeleton width="60%" />
                </Stack>
              ) : (
                <Cards
                  id={profesional.id_profesional}
                  profesion={profesional.profesion}
                  name={profesional.nombre}
                  email={profesional.correo_electronico}
                  bio={profesional.biografia}
                />
              )}
            </div>
          ))}
          </div>

          <div className="pagination">
            <Pagination
              count={totalPages}
              page={page}
              onChange={(event, value) => setPage(value)}
              shape="rounded"
              color="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Professionals;
