import { useState } from 'react';

export const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    counter > 0 && setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <>
      <h2>CounterApp</h2>
      <hr />
      <h3>Counter: {counter}</h3>
      <button className="btn btn-success" onClick={handleIncrease}>
        +1
      </button>
      <button className="btn btn-danger" onClick={handleReset}>
        Reset
      </button>
      <button className="btn btn-warning" onClick={handleDecrement}>
        -1
      </button>
    </>
  );
};
