import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  const onSetState = () => {
    const newUser = {
      id: '1659403688472',
      name: 'John Doe',
      email: 'doejhon@email.com',
    };
    setUser(newUser);
  };

  return (
    <>
      <h5>LoginPage</h5>
      <hr />
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <button onClick={onSetState} className="btn btn-outline-primary">
        Set User
      </button>
    </>
  );
};
