import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  const submitLogin = () => {
    setUser({
      id: new Date().getTime(),
      name: "Juan",
      secondName: "Ignacio",
      surname: "Sterren",
      email: "sterrenjuanignacio@gmail.com",
    });
  };

  return (
    <div>
      <h2>LoginScreen</h2>
      <hr></hr>
      <button className="btn btn-success" onClick={submitLogin}>
        Ingresar
      </button>
    </div>
  );
};
