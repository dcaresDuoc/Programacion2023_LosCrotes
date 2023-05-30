import { useState, useEffect } from 'react'
import axios from 'axios'
 
export const usePro = () => {
  const [profesionales, setProfesionales] = useState([])

  useEffect(() => {
    async function getData() {
      const response = await axios.get('http://localhost:3000/api/users')
      const data = response.data
      setProfesionales(data)
    }

    getData()
  },[])

  
  return { profesionales }
}


