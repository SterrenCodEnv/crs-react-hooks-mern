import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./style.css";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter();

  const { data, loading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote, series } = !!data && data[0];

  return (
    <div>
      <h2>BreakingBad Quotes</h2>
      <hr />

      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-grow text-info" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : (
        <blockquote className="blockquote text-center">
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer pt-4">
            {author} <cite title="Source Title">({series})</cite>
          </footer>
        </blockquote>
      )}

      {!loading && (
        <div className="text-end">
          {counter > 1 && (
            <button
              onClick={decrement}
              type="button"
              className="btn btn-outline-secondary m-2"
            >
              Previous Quote
            </button>
          )}

          <button
            onClick={increment}
            type="button"
            className="btn btn-outline-primary m-2"
          >
            Next Quote
          </button>
        </div>
      )}
    </div>
  );
};
