import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const hanleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const hadleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) setCategories((c) => [inputValue, ...c]);
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={hadleSubmit}>
        <input type="text" value={inputValue} onChange={hanleInputChange} />
      </form>
    </>
  );
};

AddCategory.prototype = {
  setCategories: PropTypes.func.isRequired,
};
