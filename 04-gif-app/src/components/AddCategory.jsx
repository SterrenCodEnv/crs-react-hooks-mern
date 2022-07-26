import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length >= 1) {
      onNewCategory(inputValue.trim().toLocaleLowerCase());
      setInputValue('');
    }
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        onChange={onInputChange}
        value={inputValue}
        type="text"
        placeholder="Buscar gif..."
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
