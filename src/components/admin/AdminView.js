import React from 'react';
import {
  Container,
  Nav,
  NavLink,
  NavItem,
  TabContent,
  TabPane,
} from 'reactstrap';

import AddUser from './adminComponents/AddUser';
import CurrentUsers from './adminComponents/CurrentUsers';
import DeleteUser from './adminComponents/DeleteUser';
import AddTeam from './adminComponents/AddTeam';
import AddCategory from './adminComponents/AddCategory';

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

    const labels = ['Users', 'Add a User', 'Delete a User', 'Add a Team', 'Add a Category'];
    const components = [
      <CurrentUsers key={'currentUsersComponent'} />, 
      <AddUser key={'addUserComponent'} />,
      <DeleteUser key={'deleteUserComponent'} />,
      <AddTeam key={'addTeamComponent'} />,
      <AddCategory key={'addCategoryComponent'} />
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
        </Nav>
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
