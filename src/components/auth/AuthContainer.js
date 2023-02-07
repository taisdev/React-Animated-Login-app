import React, { useState } from "react";
import "./AuthContainer.scss";
import Login from "./Login";
import Reset from "./Reset";
import Register from "./Register";

const AuthContainer = () => {
  const [auth, setAuth] = useState({
    login: true,
    register: false,
    reset: false,
  });

  const handleRegister = () => {
    setAuth({ login: false, register: true, reset: false });
  };

  const handleLogin = () => {
    setAuth({ login: true, register: false, reset: false });
  };

  const handleReset = () => {
    setAuth({ login: false, register: false, reset: true });
  };

  return (
    <section className="--flex-center --100vh --bg-grey">
      <div className="containe box">
        {auth.login && (
          <Login
            onRegister={handleRegister}
            onReset={handleReset}
          />
        )}
        {auth.register && (
          <Register
            onLogin={handleLogin}
          />
        )}
        {auth.reset && <Reset onLogin={handleLogin} />}
      </div>
    </section>
  );
};

export default AuthContainer;
