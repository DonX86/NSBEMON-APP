import React from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col,
} from 'reactstrap';

import { Logout } from './login/Logout';

const AppRoute = (props) => {
  return (
    <NavItem>
      <Link to={'/' + props.route.render} className="nav-link">
        {props.route.name}
      </Link>
    </NavItem>
  );
};

const AppRouteList = (props) => {
  return (
    <Nav className="ml-auto" navbar>
    {
      props.routes.map((route, i) => (
        <AppRoute key={'route_' + i} route={route} />
      ))
    }
    </Nav>
  );
};

export class AppMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="inverse" light expand="md">
        <NavbarBrand>NSBEmon</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <AppRouteList routes={this.props.routes} />
        </Collapse>
      </Navbar>
    );
  }
};
