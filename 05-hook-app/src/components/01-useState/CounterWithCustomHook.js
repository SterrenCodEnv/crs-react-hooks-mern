import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./counter.css";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter();

  return (
    <>
      <h2>Counter with hook: {state}</h2>
      <hr />

      <button onClick={() => increment(2)} className="btn btn-success m-3">+1</button>
      <button onClick={() => reset()} className="btn btn-dark m-3">Reset</button>
      <button onClick={() => decrement(2)} className="btn btn-warning m-3">-1</button>
    </>
  );
};
