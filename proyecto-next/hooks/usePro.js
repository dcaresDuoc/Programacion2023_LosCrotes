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
      setTimeout(() => {
        setProfesionales(data)
        setLoading(false)
      }, 500)
    }

    getData()
  },[])

  
  return { profesionales, loading }
}

export const useProID = (id) => {
  const [profesional, setProfesional] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchProfessionalDetails = async () => {
      setLoading(true)

      try {
        const response = await fetch(`/api/profesionales/${id}`)
        const data = await response.json()

        // Agregar un retraso de 500 ms antes de mostrar los datos
        setTimeout(() => {
          setProfesional(data)
          setLoading(false)
        }, 500)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    fetchProfessionalDetails()
  }, [id])

  return { profesional, loading }
}
