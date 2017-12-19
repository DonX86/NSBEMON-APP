import React from 'react';
import { Redirect } from 'react-router-dom';

import { authenticationClient } from '../Authentication.js';

export const Logout = () => {
  authenticationClient.logout();
  return (<Redirect to="/Login" />);
}
