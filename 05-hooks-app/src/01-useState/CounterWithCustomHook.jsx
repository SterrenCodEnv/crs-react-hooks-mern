import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
  const { counter, handleIncrease, handleDecrement, handleReset } =
    useCounter(0);

  return (
    <>
      <h2>CounterApp With Custom Hook</h2>
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
