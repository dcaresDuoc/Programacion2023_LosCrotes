import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react'
import { userData } from '../utils/userData' 

import { Pagination, Navigation } from 'swiper';

import Cards from './Cards' 

// Import Swiper style
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/navigation";


import Photo from '../public/man.png'
import Image from 'next/image'



export default function Slicer () {
  const [profesionales, setProfesionales] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await userData()
      setProfesionales(res)
    }

    getData()
  },[])

  console.log(profesionales)
  
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
        <div>
          <SwiperSlide>
            <Cards id={profesional.id_profesional} name={profesional.nombre} email={profesional.correo_electronico}/>
          </SwiperSlide>
        </div>
        ))}
      
      </Swiper>
    </>
  );
};