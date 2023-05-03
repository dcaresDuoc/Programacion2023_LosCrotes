import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react'
import { userData } from '../utils/userData' 

import { Pagination, Navigation } from 'swiper';

// Import Swiper style
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/navigation";


import Photo from '../public/man.png'
import Image from 'next/image'



export default function Slicer () {
  const [users, setUser] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await userData()
      setUser(res)
    }

    getData()
  },[])

  console.log(users)
  
  return (
    <>
      <Swiper
      pagination={{ clickable: true}}
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1070: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {users.map((user) => (
        <div>
          <SwiperSlide>
            <div className='card' key={user.idusers}>
              <div className='card-img'>
                <Image src={Photo} alt='imagen de persona adulta' width={270} height={200}/>
              </div>
      
              <div className='card-info'>
                <h1>{user.username}</h1>
                <h5>{user.email}</h5>
              </div>
            </div>
          </SwiperSlide>
        </div>
        ))}
      
      </Swiper>
    </>
  );
};