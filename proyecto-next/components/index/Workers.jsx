import { Skeleton } from '@mui/material';
import React, { lazy, Suspense } from 'react';

// Componente diferido
const Slicer = lazy(() => import('../Slicer'));

const Workers = () => {
  return (
    <div className='section-work'>
      <div className='container-workers'>
        <div className='text-work'>
          <h1>Ultimas noticias</h1>
          <span>Enterate de los ultimos eventos y noticias</span>
        </div>

        <Suspense fallback={<Skeleton variant="rectangular" width={500} height={300} />}>
          <Slicer />
        </Suspense>
      </div>
    </div>
  );
};

export default Workers;