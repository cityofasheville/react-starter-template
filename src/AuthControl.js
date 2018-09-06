import React from 'react';
import { withUser } from './UserContext';
import authControlSettings from './authControlSettings';

const AuthControl = props => (
  <a
    href={props.user.loggedIn ? authControlSettings.logoutURL : authControlSettings.loginURL}
  >
    {props.user.loggedIn
      ? 'Log out'
      : 'Log in'
    }
  </a>
);

export default withUser(AuthControl);
