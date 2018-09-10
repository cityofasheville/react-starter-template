import React from 'react';
import gql from 'graphql-tag';
import queryString from 'query-string';
import { Mutation } from 'react-apollo';
import { withRouter, Redirect } from 'react-router-dom';
import LogoutCode from 'template/LogoutCode';
import { withUser } from 'template/UserContext';
import Error from 'template/shared/Error';
import LoadingAnimation from 'template/shared/LoadingAnimation';

const LOGOUT_CODE = gql`
  mutation logout {
    logout {
      loggedIn
      message
      reason
    }
  }
`;

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      message: 'No message',
      fail: false,
    };
  }

  render() {
    const code = queryString.parse(this.props.location.search).code;
    return (
      <Mutation
        mutation={LOGOUT_CODE}
        onCompleted={(data) => {
          this.setState({
            isLoggedIn: data.registerCode.loggedIn,
            message: data.registerCode.message,
            fail: data.registerCode.loggedIn,
          }, () => {
            if (!this.state.isLoggedIn) {
              this.props.user.logout();
            }
          });
        }}
      >
        {
          (logout, { data, error }) => (
            <div>
              <LogoutCode
                logout={logout}
                loggedIn={this.state.loggedIn}
              >
                <div>
                  {this.state.fail ? // eslint-disable-line
                    <Error message={this.state.message} />
                    : this.state.loggedIn ?
                      <LoadingAnimation />
                      : <Redirect to="/" />
                  }
                </div>
              </LogoutCode>
            </div>
          )
        }
      </Mutation>
    );
  }
}

export default withRouter(withUser(Logout));
