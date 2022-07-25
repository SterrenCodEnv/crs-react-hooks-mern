import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getGifs(category).then(setImages);
      setIsLoading(false);
    }, 500);
  }, []);

  return {
    images,
    isLoading,
  };
};
