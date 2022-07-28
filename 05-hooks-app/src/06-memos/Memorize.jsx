import React from 'react';
import { useCounter } from '../hooks';
import { Result } from './Result';

export const Memorize = () => {
  const { counter, handleIncrease, handleDecrement, handleReset } =
    useCounter(0);

  return (
    <>
      <h2>Memorize</h2>
      <hr />
      <h3 className="mb-3">
        Counter: <Result value={counter} />
      </h3>
      <button
        disabled={counter === 0}
        className="btn btn-warning"
        onClick={handleDecrement}
      >
        -1
      </button>
      <button
        disabled={counter === 0}
        className="btn btn-danger"
        onClick={handleReset}
      >
        Reset
      </button>
      <button className="btn btn-success" onClick={handleIncrease}>
        +1
      </button>
    </>
  );
};
