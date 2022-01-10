import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";
import "../03-Examples/style.css";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  /* const increment = () => {
    setCounter(counter + 1);
  }; */

  const increment = useCallback(() => {
    setCounter((c) => c + 1);
  }, [setCounter]);

  return (
    <div>
      <h2>Callback Hook: {counter}</h2>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
};
