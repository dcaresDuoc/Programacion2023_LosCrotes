import { useState, useEffect } from 'react'

export const usePro = () => {
  const [profesionales, setProfesionales] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      const response = await fetch('/api/profesionales');
      const data = await response.json();
      setProfesionales(data);
      setLoading(false);
    }

    const timer = setTimeout(() => {
      getData();
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return { profesionales, loading };
};

export const useProID = (id) => {
  const [profesional, setProfesional] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchProfessionalDetails = async () => {
      try {
        const response = await fetch(`/api/profesionales/${id}`)
        const data = await response.json()
        setProfesional(data)
        setLoading(false)

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
