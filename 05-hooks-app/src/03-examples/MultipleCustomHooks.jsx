import React from 'react';
import { useFetch, useCounter } from '../hooks';
import { Loading, Quote, Error } from './index';

export const MultipleCustomHooks = () => {
  const { counter, handleDecrement, handleIncrease, handleReset } =
    useCounter(1);

  const { data, error, loading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote, quote_id, series } = !!data && data[0];

  return (
    <>
      <h2>
        Breaking Bad Quotes
        <p className="lead text-muted">(MultipleCustomHooks)</p>
      </h2>
      <hr />
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <>
          <Quote
            author={author}
            quote={quote}
            quote_id={quote_id}
            series={series}
          />
          <hr />
          <button
            className="btn btn-secondary"
            disabled={loading || counter === 1}
            onClick={handleDecrement}
          >
            Anterior
          </button>
          <button
            className="btn btn-warning"
            disabled={loading || counter === 1}
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="btn btn-success"
            disabled={loading || counter === 30}
            onClick={handleIncrease}
          >
            Siguiente
          </button>
        </>
      )}
    </>
  );
};
