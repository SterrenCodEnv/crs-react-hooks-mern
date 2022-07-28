import { Child } from './Child';
import { useState, useCallback } from 'react';

export const Parent = () => {
  const numbers = [2, 4, 6, 8, 10];
  const [value, setValue] = useState(0);

  const increment = useCallback((num) => {
    setValue((prevValue) => prevValue + num);
  }, []);

  return (
    <div>
      <h2>Parent</h2>
      <p> Total: {value} </p>
      <hr />

      {numbers.map((n) => (
        <Child key={n} number={n} increment={increment} />
      ))}
    </div>
  );
};
