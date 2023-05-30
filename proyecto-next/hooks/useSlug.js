import { useEffect, useState } from 'react';
import axios from 'axios';

export const useSlug = () => {
  const [slug, setSlug] = useState([])

  useEffect(() => {
    const fetchSlug = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/slug');
        const data = response.data;
        setSlug(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSlug();
  }, []);

  return {slug}
};
