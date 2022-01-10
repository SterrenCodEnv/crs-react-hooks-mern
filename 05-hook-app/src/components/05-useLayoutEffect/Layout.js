import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

export const Layout = () => {
  const { counter, increment, decrement } = useCounter();
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];
  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
  });

  const { bottom, height, left, right, top, width, x, y } = boxSize;

  useLayoutEffect(() => {
    const bSize = pTag.current.getBoundingClientRect();
    setBoxSize(bSize);
  }, [quote]);

  return (
    <div>
      <h2>LayoutEffect</h2>
      <hr />
      <blockquote className="blockquote text-center">
        <p ref={pTag} className="mb-0">
          {quote}
        </p>
      </blockquote>
      <hr />
      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">
          Box Size
        </li>
        <li className="list-group-item">
          <b>Bottom:</b> {bottom}
        </li>
        <li className="list-group-item">
          <b>Height:</b> {height}
        </li>
        <li className="list-group-item">
          <b>Left:</b> {left}
        </li>
        <li className="list-group-item">
          <b>Right:</b> {right}
        </li>
        <li className="list-group-item">
          <b>Top:</b> {top}
        </li>
        <li className="list-group-item">
          <b>Width:</b> {width}
        </li>
        <li className="list-group-item">
          <b>X:</b> {x}
        </li>
        <li className="list-group-item">
          <b>Y:</b> {y}
        </li>
      </ul>
      <div className="text-end">
        {counter > 1 && (
          <button
            onClick={decrement}
            type="button"
            className="btn btn-outline-secondary m-2"
          >
            Previous Quote
          </button>
        )}

        <button
          onClick={increment}
          type="button"
          className="btn btn-outline-primary m-2"
        >
          Next Quote
        </button>
      </div>
    </div>
  );
};
