import React from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { authenticationClient } from '../../authentication/Authentication';

const LoginHeader = () => (
  <h2>
    Log into your account
  </h2>
)

const LoginFields = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="loginEmail">Email</Label>
        <Input
          id="loginEmail"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => props.handleUsernameChange(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="loginPassword">Password</Label>
        <Input
          id="loginPassword"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => props.handlePasswordChange(e)}/>
      </FormGroup>
      <Button onClick={(e) => props.handleSubmit(e)}>Submit</Button>
    </Form>
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
      this.props.handleLogin();
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
      <Container>
        <LoginHeader />
        <LoginFields
          handleUsernameChange={this.handleUsernameChange}
          handlePasswordChange={this.handlePasswordChange}
          handleSubmit={this.handleSubmit}
        />
      </Container>
    );
  }
}
