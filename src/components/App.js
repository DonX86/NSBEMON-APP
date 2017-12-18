import React from 'react';

import { Route, Redirect, Switch } from 'react-router-dom';
import { AppMenu } from './AppMenu';
import { PrivateRoute } from './PrivateRoute';
import { Leader } from './Leader';
import { Members } from './Members';
import { Profile } from './Profile';
import { Login } from './Login';
import { Logout } from './Logout';

import * as authenticate from '../authenticate.js';

let appRoutes = authenticate.isLoggedIn() ? ['Leader', 'Teammates', 'Profile', 'Logout'] : ['Login'];

const NoMatch = ({ location }) => (
  <div className='ui inverted red raised very padded text container segment'>
    <strong>Error!</strong> No route found matching:
    <div className='ui inverted black segment'>
      <code>{location.pathname}</code>
    </div>
  </div>
);

export const App = () => (
  <div>
    <AppMenu items={appRoutes} />
    <Switch>
      <PrivateRoute exact path='/Leader' component={Leader} />
      <PrivateRoute path='/Teammates' component={Members} />
      <PrivateRoute path='/Profile' component={Profile} />
      <Route exact path='/Login' component={Login} />
      <Route exact path='/Logout' component={Logout} />

      <Route component={NoMatch} />
    </Switch>
  </div>
);
