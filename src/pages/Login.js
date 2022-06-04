import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import LoginContext from '../context/LoginContext';

function Login() {
  const user = useContext(LoginContext);
  const history = useHistory();

  const handleButton = () => {
    history.push('/search');
  };

  return (
    <main className="login-wrapper">
      <div className="login-container">
        <h1 id="trybe-tunes-header">TrybeTunes</h1>
        <hr />
        <div className="login-form">
          <label htmlFor="name">
            Nome:
            <br />
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              placeholder="digite seu nome"
              value={ user.name }
              onChange={ user.handleChange }
            />
          </label>
          <br />
          <label htmlFor="email">
            E-mail:
            <br />
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="digite seu email"
              value={ user.email }
              onChange={ user.handleChange }
            />
          </label>
          <br />
          <button
            className="login-button"
            type="button"
            onClick={ handleButton }
          >
            Entrar
          </button>
        </div>
      </div>
    </main>
  );
}

export default Login;
