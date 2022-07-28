import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback((value) => {
    setCounter((prevCounter) => prevCounter + value);
  }, []);

  return (
    <>
      <h2>CallbackHook</h2>
      <hr />
      <h3 className="mb-3">Counter: {counter}</h3>
      <ShowIncrement increment={increment} />
    </>
  );
};
