import React from 'react';
import { Redirect } from 'react-router-dom';

const Logout = (props) => {
  props.handleLogout();
  return (<Redirect to="/Login" />);
}

export default Logout;
