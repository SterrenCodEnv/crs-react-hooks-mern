import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h2>Focus Screen</h2>
      <hr />
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
        className="form-control"
      />
      <button onClick={handleClick} className="btn btn-primary mt-4">
        Set Focus
      </button>
    </>
  );
};
