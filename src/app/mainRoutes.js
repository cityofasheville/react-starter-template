import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from 'app/About';
import Home from 'app/Home';
import Login from 'template/Login';

const mainRoutes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default mainRoutes;
