import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withUser } from './UserContext';
import authControlSettings from './authControlSettings';

const AuthControl = (props) => {
  if (props.user.loggedIn) {
    return (<a href={authControlSettings.logoutURL}>Log out</a>);
  }
  console.log(props);
  return (<Link to={{ pathname: '/prelogin', state: { redirectTo: props.location }}}>Log in</Link>);
};

export default withRouter(withUser(AuthControl));
