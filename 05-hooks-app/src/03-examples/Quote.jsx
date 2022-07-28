import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ author, quote, quote_id, series }) => {
  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [quote_id]);

  return (
    <>
      <div className="card">
        <div className="card-header">Quote N° {quote_id}</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p ref={pRef}>{quote}</p>
            <footer className="blockquote-footer">
              {author} <cite title="Source Title">({series})</cite>
            </footer>
          </blockquote>
        </div>
      </div>
      <p className="mt-4 mb-0">
        Size of <mark>p</mark> element with useLayoutEffect
      </p>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
