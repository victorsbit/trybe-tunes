import React, { useContext } from 'react';
import LoginContext from '../context/LoginContext';

function Header() {
  const { user } = useContext(LoginContext);

  return (
    <header>
      <span>{ user.name }</span>
      <span>{ user.email }</span>
    </header>
  );
}

export default Header;
