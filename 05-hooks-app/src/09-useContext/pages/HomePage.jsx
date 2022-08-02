import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const HomePage = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h5>
        HomePage |<small className="text-muted"> {user?.name}</small>
      </h5>
      <hr />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
};
