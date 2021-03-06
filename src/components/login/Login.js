import React from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

import { authenticationClient } from '../../authentication/Authentication';

const LoginHeader = () => (
  <h2>
    Log into your account
  </h2>
);

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
          onChange={(e) => props.handleEmailChange(e)}
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
      <Button outline onClick={(e) => props.handleSubmit(e)}>Submit</Button>
    </Form>
  );
};

const LoginError = ({ error }) => (
  error ? (
    <Alert color="danger">
      <h1>
        <strong>Error!</strong> {error}
      </h1>
    </Alert>
  ) : null
);


class Login extends React.Component {

  state = {
    email: '',
    password: '',
    authenticated: false,
    error: '',
  }

  componentWillMount() {
    this.setState({
      authenticated: authenticationClient.isLoggedIn()
    });
  }

  handleSubmit = (event) => {

    event.preventDefault();

    const email = this.state.email;
    const password = this.state.password;

    authenticationClient.login(email, password)
    .then(() => {
      // The authentication client received a valid token and saved it
      this.props.handleLogin();
      this.setState({
        authenticated: true,
        error: '',
      });
    })
    .catch(err => {
      // Password was invalid... maybe show invalid message
      this.setState({
        error: err,
      });
    });
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
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
        <LoginError error={this.state.error} />
        <LoginFields
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
          handleSubmit={this.handleSubmit}
        />
      </Container>
    );
  }
}

export default Login;
