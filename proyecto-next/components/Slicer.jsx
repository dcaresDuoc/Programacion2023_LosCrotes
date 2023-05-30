import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { usePro } from '../hooks/usePro'

import Cards from './Cards' 

// Import Swiper style
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function Slicer () {
  const { profesionales } = usePro()

  return (
    <>
      <Swiper
      pagination={{ clickable: true}}
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
        <Cards key={profesional.id_profesional} profesion={profesional.profesion}
          id={profesional.id_profesional}
          name={profesional.nombre} 
          email={profesional.correo_electronico} 
          bio={profesional.biografia}
        />
      </SwiperSlide>
    ))}
    
      </Swiper>
    </>
  );
};