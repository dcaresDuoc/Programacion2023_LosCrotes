import { useState, useEffect } from 'react'
import axios from 'axios'
 
export const usePro = () => {
  const [profesionales, setProfesionales] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    async function getData() {
      const response = await fetch('/api/profesionales')
      const data = await response.json()
        setProfesionales(data)
        setLoading(false)
    }

    const timer = setTimeout(() => {
      getData()
    }, 500)

    return () => clearInterval(timer)
  },[])

  
  return { profesionales, loading }
}

export const useProID = (id) => {
  const [profesional, setProfesional] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchProfessionalDetails = async () => {
      try {
        const response = await fetch(`/api/profesionales/${id}`)
        const data = await response.json()

        // Agregar un retraso de 500 ms antes de mostrar los datos
        setTimeout(() => {
          setProfesional(data)
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    const timer = setTimeout(() => {
      fetchProfessionalDetails()
    }, 500)


  return () => clearTimeout(timer)
  }, [id])

  
  return { profesional, loading }
}
