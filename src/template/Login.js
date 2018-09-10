import React from 'react';
import gql from 'graphql-tag';
import queryString from 'query-string';
import { Mutation, Query } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import RegisterCode from 'template/RegisterCode';
import { withUser } from 'template/UserContext';
import Error from 'template/shared/Error';
import LoadingAnimation from 'template/shared/LoadingAnimation';

const REGISTER_CODE = gql`
  mutation registerCode($code: String!, $redirect_uri: String!) {
    registerCode(code: $code, redirect_uri: $redirect_uri) {
      loggedIn
      message
      reason
    }
  }
`;

const GET_USER_INFO = gql`
  query user {
    user {
      id,
      name,
      email,
      position,
      department,
      division,
      supervisor_id,
      supervisor,
      supervisor_email,
    }
  }
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      message: 'No message',
      fail: false,
    };
  }

  render() {
    const code = queryString.parse(this.props.location.search).code;
    return (
      <Mutation
        mutation={REGISTER_CODE}
        onCompleted={(data) => {
          this.setState({
            isLoggedIn: data.registerCode.loggedIn,
            message: data.registerCode.message,
            fail: !data.registerCode.loggedIn,
          }, () => {
            if (this.state.isLoggedIn) {
              this.props.user.login();
            }
          });
        }}
      >
        {
          (registerCode, { data, error }) => (
            <div>
              <RegisterCode
                registerCode={registerCode}
                code={code}
                loggedIn={this.state.loggedIn}
              >
                <div>
                  {this.state.fail ? // eslint-disable-line
                    <Error message={this.state.message} />
                    : this.state.isLoggedIn
                      ? (
                        <Query
                          query={GET_USER_INFO}
                        >
                          {({ loading, error, data }) => {
                            if (loading) return <LoadingAnimation />;
                            if (error) return <Error message={error.message} />;
                            this.props.user.setUserInfo(data.user);
                            const priorPath = localStorage.getItem('preLoginPathname');
                            if (priorPath) {
                              if (priorPath !== '/login') {
                                const priorSearch = localStorage.getItem('preLoginSearch');
                                if (priorSearch) {
                                  this.props.history.push(`${priorPath}${priorSearch}`);
                                }
                                this.props.history.push(priorPath);
                              }
                            }
                            return (<div>You are logged in.</div>);
                          }}
                        </Query>
                      )
                      : <LoadingAnimation />
                  }
                </div>
              </RegisterCode>
            </div>
          )
        }
      </Mutation>
    );
  }
};

export default withRouter(withUser(Login));
