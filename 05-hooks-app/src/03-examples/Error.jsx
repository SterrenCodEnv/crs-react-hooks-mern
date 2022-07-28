import React from 'react';

export const Error = () => {
  return (
    <>
      <div
        className="alert alert-danger alert-dismissible fade show text-center mt-4"
        role="alert"
      >
        <strong>Upsss!</strong> An error has occurred...
      </div>
    </>
  );
};
