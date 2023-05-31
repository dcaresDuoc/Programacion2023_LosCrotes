import { usePro } from '@/hooks/usePro'
import { Profesionales } from '../components/index' 
import React from 'react'

const professionals = () => {
  const { profesionales, loading } = usePro() 
  return (
    <div className='section-pro'>
      <Profesionales profesionales={profesionales} loading={loading}/>
    </div>
  )
}

export default professionals