import { useProSlug } from '@/hooks/usePro'
import { Profesionales } from '../../components/index' 
import { useRouter } from 'next/router'


const professionals = () => {
  const router = useRouter()
  const { slug } = router.query
  const { profesionales, loading } = useProSlug(slug) 

  return (
    <div className='section-pro'>
      <Profesionales profesionales={profesionales} loading={loading}/>
    </div>
  )
}

export default professionals