import React, { useContext } from 'react';
import LoginContext from '../context/LoginContext';

function Search() {
  const { user } = useContext(LoginContext);

  return <span>{user.name}</span>;
}

export default Search;
