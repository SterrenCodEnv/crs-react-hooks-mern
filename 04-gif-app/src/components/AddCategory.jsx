import { useState } from 'react';

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
    <form onSubmit={onSubmit}>
      <input
        onChange={onInputChange}
        value={inputValue}
        type="text"
        placeholder="Buscar gif..."
      />
    </form>
  );
};
