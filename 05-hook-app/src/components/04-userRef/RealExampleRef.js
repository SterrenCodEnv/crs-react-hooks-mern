import React, { useState } from "react";
import { MultipleCustomHooks } from "../03-Examples/MultipleCustomHooks";
import "../03-Examples/style.css";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Real Example Ref</h1>
      <hr />
      {show && <MultipleCustomHooks />}

      <button
        type="button"
        className="btn btn-primary mt-5"
        onClick={() => setShow(!show)}
      >
        Show/Hide
      </button>
    </div>
  );
};
