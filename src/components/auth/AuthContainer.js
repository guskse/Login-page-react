import "./AuthContainer.scss";
import Register from "./Register";
import Login from "./Login";
import Reset from "./Reset";
import { useState } from "react";

function AuthContainer() {
  //STATES
  const [auth, setAuth] = useState({
    login: true,
    register: false,
    reset: false,
  });

  //functions
  const handleRegister = () => {
    setAuth({
      login: false,
      register: true,
      reset: false,
    });
  };

  const handleReset = () => {
    setAuth({
      login: false,
      register: false,
      reset: true,
    });
  };

  const handleLogin = () => {
    setAuth({
      login: true,
      register: false,
      reset: false,
    });
  };

  return (
    <section className="--flex-center --100vh --bg-white">
      <div className="container box">
        {auth.login && (
          <Login onRegister={handleRegister} onReset={handleReset} />
        )}
        {auth.register && <Register onLogin={handleLogin} />}
        {auth.reset && <Reset onLogin={handleLogin} />}
      </div>
    </section>
  );
}

export default AuthContainer;
