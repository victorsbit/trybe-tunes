import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/search" component={ Search } />
    </Switch>
  );
}

export default App;
