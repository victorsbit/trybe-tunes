import React, { useState } from 'react';
import LoginContext from './LoginContext';

// eslint-disable-next-line react/prop-types
function LoginProvider({ children }) {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  const handleChange = ({ target }) => {
    setUser((prevUser) => ({
      ...prevUser,
      [target.name]: target.value,
    }));
  };

  const contextValue = {
    user,
    handleChange,
  };

  return (
    <LoginContext.Provider value={ contextValue }>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
