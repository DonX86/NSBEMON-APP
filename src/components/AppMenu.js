import React from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

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
    <Nav className="pull-right" navbar>
    {
      props.routes.map((route, i) => (
        <AppRoute key={'route_' + i} route={route} />
      ))
    }
    </Nav>
  );
};

class AppMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      buttonColor: '#047aff',
    }
  }

  handleMouseEnter = (event) => {
    this.setState({
      buttonColor: 'white',
    });
  }

  handleMouseLeave = (event) => {
    this.setState({
      buttonColor: '#047aff'
    });
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    const buttonColor = this.state.buttonColor;
    return (
      <Navbar color="inverse" light expand="md">
        <NavbarBrand>NSBEmon</NavbarBrand>
        <button
          className="btn btn-outline-primary"
          onMouseEnter={(e) => this.handleMouseEnter(e)}
          onMouseLeave={(e) => this.handleMouseLeave(e)}
        >
          <Link
            style={{color: buttonColor, textDecoration: 'none'}}
            to='/trainer/train'>
            Document Training
          </Link>
        </button>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <AppRouteList routes={this.props.routes} />
        </Collapse>
      </Navbar>
    );
  }
}

export default AppMenu;
