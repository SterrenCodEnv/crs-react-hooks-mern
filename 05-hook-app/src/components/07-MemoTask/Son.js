import React from "react";
import "../03-Examples/style.css";

export const Son = React.memo(({ number, increment }) => {
  console.log("Son component was regenerated -_-'");

  return (
    <button className="btn btn-primary m-1" onClick={() => increment(number)}>
      {number}
    </button>
  );
});
