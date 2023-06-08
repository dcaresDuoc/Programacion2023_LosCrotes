import { useProID } from '@/hooks/usePro';
import { useRouter } from 'next/router';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Image from 'next/image'
import Gato from '../../public/miau.jpg'
import { MyCalendar } from '@/components/Calendar';
import { useState } from 'react';


const professionalDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const { profesional } = useProID(id);
  const [hoursSelected, setHoursSelected] = useState([])

  console.log(profesional)

  const handleSelectedHours = (hours) => {
    setHoursSelected(hours);
  };

  if (!profesional) {
    return (
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </Stack>
    );
  }

  return (
    <main className='container-profesional'>

      <div className='middle-section-profesional'>
        {profesional.map(pro => (
          <div key={pro.id_profesional} className='profesional-info'>

            <div className='pro-photo'>
              <Image src={Gato} alt='cositas ruicas' width={100} height={100}/>
            </div>
            <div className='pro-details'>
              <span>{pro.nombre}</span>
              <span>{pro.correo}</span>
              <span>{pro.telefono}</span>
            </div>
          </div>
          ))}

        <div className='pro-calendar'>
          <MyCalendar onSelectedHours={handleSelectedHours}/>
        </div>
      </div>
    </main>
  );
};

export default professionalDetails;
