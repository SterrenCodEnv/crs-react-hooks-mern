import { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
  const isMount = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMount.current = false;
    };
  }, []);

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    });

    fetch(url).then((resp) => {
      resp
        .json()
        .then((data) => {
          if (isMount.current) {
            setState({
              data,
              loading: false,
              error: null,
            });
          }
        })
        .catch(() => {
          setState({
            data: null,
            loading: false,
            error: "Data could not be loaded",
          });
        });
    });
  }, [url]);

  return state;
};
