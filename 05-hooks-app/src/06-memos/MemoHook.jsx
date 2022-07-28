import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Proceso que consume mucha memoria');
  }
  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, handleIncrease, handleDecrement, handleReset } =
    useCounter(0);

  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h2>MemoHook</h2>
      <hr />
      <h3 className="mb-3">Counter: {counter}</h3>

      <h4>{memorizedValue}</h4>

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
      <br />
      <div className="text-end">
        <button
          className="btn btn-outline-primary"
          onClick={() => setShow(!show)}
        >
          Show/Hide ({JSON.stringify(show)})
        </button>
      </div>
    </>
  );
};
