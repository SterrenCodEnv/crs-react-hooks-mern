import { useForm } from '../hooks/useForm';
import { Message } from './Message';

export const SimpleFormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formState;

  return (
    <>
      <h2>Simple Form With Custom Hook</h2>
      <hr />
      <input
        type="text"
        placeholder="JSterren"
        name="username"
        className="form-control"
        value={username}
        onChange={onInputChange}
      />
      <p className="mt-1 mb-0">
        The username <mark>JSterren</mark> not available.
      </p>
      <br />
      <input
        type="email"
        placeholder="sterrenjuanignacio@gmail.com"
        name="email"
        className="form-control"
        value={email}
        onChange={onInputChange}
      />
      <p className="mt-1 mb-0">
        The email <mark>sterrenjuanignacio@gmail.com</mark> not available.
      </p>
      <br />
      <input
        type="password"
        placeholder="$ecretP@ssword!"
        name="password"
        className="form-control"
        value={password}
        onChange={onInputChange}
      />

      {(username === 'JSterren' ||
        email === 'sterrenjuanignacio@gmail.com') && <Message />}

      <button onClick={onResetForm} className="btn btn-outline-danger mt-4">
        Reset Form
      </button>
    </>
  );
};
