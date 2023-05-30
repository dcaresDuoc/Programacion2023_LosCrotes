import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { usePro } from '../hooks/usePro';

import Cards from './Cards'; 

// Import Swiper style
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Slicer() {
  const { profesionales, loading } = usePro();

  if (!profesionales) {
    return <div>Loading...</div>; // O muestra un indicador de carga adecuado
  }

  return (
    <Swiper
      pagination={{ clickable: true }}
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        670: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        950: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1070: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {profesionales.map((profesional) => (
        <SwiperSlide key={profesional.id_profesional}>
          {loading ? (
            <Stack spacing={2}>
              <Skeleton variant="rectangular" width={210} height={118} />
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
              loading={loading}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
