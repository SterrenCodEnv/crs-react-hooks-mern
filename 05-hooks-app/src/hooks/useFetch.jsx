import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const getFetch = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setState({
        data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error,
      });
    }
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    ...state,
  };
};
