import { useEffect, useState } from 'react';

export const useSlug = () => {
  const [slug, setSlug] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlug = async () => {
      try {
        const response = await fetch('/api/slug');
        const data = await response.json();
        setSlug(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchSlug();
  }, []);

  return { slug, loading };
};