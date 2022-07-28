import { useState } from 'react';

export const useCounter = (value = 0) => {
  const [counter, setCounter] = useState(value);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    counter > 0 && setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  return { counter, handleIncrease, handleDecrement, handleReset };
};
