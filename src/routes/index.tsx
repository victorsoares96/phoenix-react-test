import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

/**
 * Pages
 */
import Home from '../pages/Home';
import Register from '../pages/Register';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Redirect to='/' />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;