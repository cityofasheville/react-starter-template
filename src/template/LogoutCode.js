import React from 'react';

class LogoutCode extends React.Component {
  componentDidMount() {
    console.log('test', this.props.loggedIn);
    //if (this.props.loggedIn) {
    //  console.log('logging out');
      this.props.logout();
    //}
  }

  render() {
    return this.props.children;
  }
}

export default LogoutCode;
