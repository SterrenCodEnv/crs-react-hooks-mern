import React, { useRef } from "react";
import "../03-Examples/style.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <div>
      <h2>Focus Screen</h2>
      <hr />

      <div className="input-group mb-3">
        <button className="btn btn-primary" type="button" onClick={handleClick}>
          Focus
        </button>
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          placeholder="Your name..."
        />
      </div>
    </div>
  );
};
