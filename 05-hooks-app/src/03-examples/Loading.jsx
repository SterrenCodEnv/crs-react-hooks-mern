import React from 'react';

export const Loading = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-5 mb-5">
        <div className="spinner-grow text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};
