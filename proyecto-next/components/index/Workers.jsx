import { Skeleton } from '@mui/material'
import React, { lazy, Suspense } from 'react'

const Slicer = lazy(() => import('../Slicer'))
const Workers = () => {
  return (
    <div className='section-work'>
      <div className='container-workers'>
        <div className='text-work'>
          <h1>Ultimas noticias</h1>
          <span>
            Enterate de los ultimos eventos y noticias
          </span>
        </div>

        <Suspense fallback={
          <>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          </>
        }>
          <Slicer />
        </Suspense>
      </div>
    </div>
  )
}

export default Workers
