import React from 'react';
import {
  Container,
  Nav,
  NavLink,
  NavItem,
  TabContent,
  TabPane,
} from 'reactstrap';

import CurrentUsers from './adminComponents/CurrentUsers';
import CurrentCategories from './adminComponents/CurrentCategories';

class AdminView extends React.Component {
  constructor() {
    super();
    this.state = { activeTab: 0 };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {

    const labels = ['Users', 'Categories'];
    const components = [
      <CurrentUsers key={'currentUsersComponent'} />, 
      <CurrentCategories key={'currentCategoriesComponent'} />
    ];

    return (
      <Container>
        <Nav tabs>
          {
            labels.map((item, index) => (
              <NavItem key={'navItem_' + index}>
                <NavLink 
                  className={this.state.activeTab === index ? 'active' : ''} 
                  onClick={() => {
                    this.toggle(index);
                  }}
                >
                  {item}
                </NavLink>
              </NavItem>
            ))
          }
        </Nav><br />
        <TabContent activeTab={this.state.activeTab}>
          {
            components.map((item, index) => (
              <TabPane key={'tabPane_' + index} tabId={index}>
                {item}
              </TabPane>
            ))
          }
        </TabContent>
      </Container>
    );
  }
}

export default AdminView;
