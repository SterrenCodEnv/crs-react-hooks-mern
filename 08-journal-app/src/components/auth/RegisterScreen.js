import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';
import { startRegisterWithEmailPassword } from '../../actions/auth';

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [values, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { name, email, password, confirmPassword } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    if (isFormValid()) {
      dispatch(startRegisterWithEmailPassword(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      return dispatch(setError('Name is required'));
    }
    if (!validator.isEmail(email)) {
      return dispatch(setError('Email is required'));
    }
    if (password.trim().length === 0) {
      return dispatch(setError('Password is required'));
    }
    if (confirmPassword.trim().length === 0) {
      return dispatch(setError('Confirm Password is required'));
    }
    if (password !== confirmPassword) {
      return dispatch(setError('Passwords must match'));
    }
    return dispatch(removeError());
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form onSubmit={handleSubmit}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}

        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />

        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          className="auth__input"
          autoComplete="off"
          value={confirmPassword}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};
