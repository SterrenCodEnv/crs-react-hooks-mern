import { useState } from 'react';

export const useForm = (initialFormValues = {}) => {
  const [formState, setFormState] = useState(initialFormValues);

  const onInputChange = ({ target: { name, value } }) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    console.log('BORRA');

    setFormState(initialFormValues);
  };

  return {
    formState,
    onInputChange,
    onResetForm,
  };
};
