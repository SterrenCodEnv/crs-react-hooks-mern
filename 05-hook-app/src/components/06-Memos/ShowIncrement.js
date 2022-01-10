import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("Show increment reloading :(");

  return (
    <button className="btn btn-primary" onClick={() => increment()}>
      +1
    </button>
  );
});
