import React from 'react';

import { Redirect } from 'react-router-dom';

import { authenticationClient } from '../Authentication';

const LoginHeader = () => (
  <h2 className="ui header">
    <div className="content">
      Log into your account
    </div>
  </h2>
)

const LoginFields = (props) => {
  return (
    <form className="ui form">
      <div className="ui stacked segment">
        <div className="field">
          <div className="ui left icon input">
            <i className="user icon"></i>
            <input
              type="text"
              placeholder="Username"
              onChange={(event) => props.handleUsernameChange(event)}
            ></input>
          </div>
        </div>
        <div className="field">
          <div className="ui left icon input">
            <i className="lock icon"></i>
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => props.handlePasswordChange(event)}
            ></input>
          </div>
        </div>
      </div>
      <button className="ui button fluid teal" onClick={(event) => props.handleSubmit(event)}>Login</button>
    </form>
  );
}


export class Login extends React.Component {

  state = {
    username: '',
    password: '',
    authenticated: false,
  }

  componentDidMount() {
    this.setState({
      authenticated: authenticationClient.isLoggedIn()
    });
  }

  handleSubmit = (event) => {

    event.preventDefault();

    const username = this.state.username;
    const password = this.state.password;

    this.setState({
      username: '',
      password: '',
    });

    authenticationClient.login(username, password)
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

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  render() {
    return this.state.authenticated ? (
      <Redirect push to="/" />
    ) : (
      <div className="ui center aligned container">
        <div className="column">
          <LoginHeader />
          <LoginFields
            handleUsernameChange={this.handleUsernameChange}
            handlePasswordChange={this.handlePasswordChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
