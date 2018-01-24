import React from 'react';

import { Route, Redirect, Switch } from 'react-router-dom';
import { AppMenu } from './AppMenu';
import { PrivateRoute } from './utilities/PrivateRoute';
import { Leader } from './leader/Leader';
import { Members } from './members/Members';
import { Profile } from './profile/Profile';
import { Login } from './login/Login';
import { Logout } from './login/Logout';
import { authenticationClient } from '../authentication/Authentication';
import { Alert, Container } from 'reactstrap';

const loggedInRoutes = [
  { name: 'Leader', render: 'leader'},
  { name: 'Teammates' , render: 'teammates'},
  { name: 'Profile', render: 'profile'},
  { name: 'Logout', render: 'logout'},
];

const loggedOutRoutes = [
  { name: 'Login', render: 'login'}
];

const NoMatch = ({ location }) => (
  <Alert color="danger">
    <h1><strong>Error!</strong> No route matching: {location.pathname}</h1>
  </Alert>
);

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      routes: []
    }
  }

  componentDidMount() {
    this.setState({
      routes: this.getRoutes(),
    });
  }

  getRoutes = () => {
    return authenticationClient.isLoggedIn() ? loggedInRoutes : loggedOutRoutes;
  }

  handleLogout = () => {
    authenticationClient.logout();
    this.setState({
      routes: this.getRoutes(),
    });
  }

  handleLogin = () => {
    this.setState({
      routes: this.getRoutes(),
    });
  }

  render() {
    return (
      <div>
        <AppMenu routes={this.state.routes}/>
        <Container>
          <Switch>
            <PrivateRoute exact path='/leader' component={Leader} />
            <PrivateRoute exact path='/teammates' component={Members} />
            <PrivateRoute exact path='/profile' component={Profile} />
            <Route exact path='/login' render={() => <Login handleLogin={this.handleLogin} />} />
            <Route exact path='/logout' render={() => <Logout handleLogout={this.handleLogout}/>} />

            <Route component={NoMatch} />
          </Switch>
        </Container>
      </div>
    );
  }
};

export { App };
