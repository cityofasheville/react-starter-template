/* **********************************************************************************************
  WARNING: DO NOT EDIT this file except from inside the react-starter-template repository. Changes made to this file inside child repos will NOT be reflected in the parent source template repository, and will generate code conflicts.
*********************************************************************************************** */
import React from 'react';
import config from 'app/config';

class RegisterCode extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      this.props.registerCode(
        {
          variables: {
            code: this.props.code,
            redirect_uri: config.redirect_uri,
          },
        }
      );
    }
  }

  render() {
    return this.props.children;
  }
}

export default RegisterCode;