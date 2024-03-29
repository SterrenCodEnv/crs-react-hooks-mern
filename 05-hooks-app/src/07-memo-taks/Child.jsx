import React from 'react';

export const Child = ({ number, increment }) => {
  console.log(`Render Child`);

  return (
    <button className="btn btn-primary mr-3" onClick={() => increment(number)}>
      {number}
    </button>
  );
};
