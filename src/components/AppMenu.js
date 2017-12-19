import React from 'react';

import { Link } from 'react-router-dom';

import { MenuList } from './MenuList';
import { authenticationClient } from '../Authentication';

export class AppMenu extends React.Component {

  state = {
    isOpen: false,
    items: []
  }

  getRoutes = () => {
    return authenticationClient.isLoggedIn() ? ['Leader', 'Teammates', 'Profile', 'Logout'] : ['Login'];
  }

  componentDidMount() {
    this.setState({ items: this.getRoutes() });
  }

  handleMenuClick = (item) => {
    this.setState({
      isOpen: !this.state.isOpen,
      items: this.getRoutes()
    });
  }

  getSideBarClasses = () => {
    return 'ui sidebar inverted vertical menu' + (this.state.isOpen ? ' visible': '');
  }

  render() {
    return (
      <div>
        <button className="circular ui icon button" onClick={this.handleMenuClick}>
          <i className="icon angle right"></i>
        </button>
        <div className={this.getSideBarClasses()} >
          <button className="circular ui icon button item" onClick={this.handleMenuClick}>
            <i className="icon angle left"></i>
          </button>
          <MenuList handleMenuClick={this.handleMenuClick} items={this.state.items} />
        </div>
      </div>
    );
  }
};
