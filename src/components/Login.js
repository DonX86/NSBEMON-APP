import React from 'react';

import { Redirect } from 'react-router-dom';

import { authenticationClient } from '../Authentication';

export class Login extends React.Component {

  state = {
    username: "",
    password: "",
    authenticated: false,
  }

  componentDidMount() {
    this.setState({
      authenticated: authenticationClient.isLoggedIn()
    });
  }

  handleSubmit = () => {

    this.setState({
      username: "",
      password: "",
    });

    authenticationClient.login()
    .then(() => {
      // The authentication client received a valid token and saved it
      this.setState({
        authenticated: true,
      });
    })
    .catch(err => {
      // Password was invalid... maybe show invalid message
    });
  }

  render() {
    return this.state.authenticated ? (
      <Redirect push to="/" />
    ) : (
      <button className="ui button" onClick={this.handleSubmit}>Submit</button>
    );
  }
}
