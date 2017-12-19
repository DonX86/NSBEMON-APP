import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { authenticationClient } from '../Authentication.js';

export const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={(props) => (
    authenticationClient.isLoggedIn() ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/Login',
        state: { from: props.location },
      }} />
    )
  )} />
);
