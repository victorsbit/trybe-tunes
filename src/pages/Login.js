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
    <main>
      <div>
        <h1 id="trybe-tunes-header">TrybeTunes</h1>
        <fieldset className="login-form">
          <label htmlFor="name">
            Nome:
            <br />
            <input
              type="text"
              id="name"
              name="name"
              value={ user.name }
              onChange={ user.handleChange }
            />
          </label>
          <br />
          <label htmlFor="email">
            E-mail:
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={ user.email }
              onChange={ user.handleChange }
            />
          </label>
          <button type="button" onClick={ handleButton }>Entrar</button>
        </fieldset>
      </div>
    </main>
  );
}

export default Login;
