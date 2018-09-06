import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

const appSettings = {
  appTitle: 'A react app',
  appIntro: 'City of Asheville, NC',
  langSwitcher: true,
  authControl: true,
  footer: true,
  mainRoutes: (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  ),
};

export default appSettings;
