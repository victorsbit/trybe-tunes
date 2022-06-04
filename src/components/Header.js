import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LoginContext from '../context/LoginContext';

function Header() {
  const { user } = useContext(LoginContext);

  return (
    <header className="main-header">
      <div id="user-info">
        <span>
          {`Olá, ${user.name}`}
        </span>
        <span id="user-email">{ user.email }</span>
      </div>
      <div>
        <Link to="/" className="logout">Sair</Link>
      </div>
    </header>
  );
}

export default Header;
