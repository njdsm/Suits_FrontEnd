import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MainNavigation from './shared/components/Navigation/MainNavigation';

import './App.css';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path='/' exact>

          </Route>
          <Route path="/places/new" exact>

          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  )
}

export default App;
