import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import * as authenticate from '../authenticate.js';

export const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={(props) => (
    authenticate.isLoggedIn() ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location },
      }} />
    )
  )} />
);
