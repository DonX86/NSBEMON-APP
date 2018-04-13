import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import ListTable from '../../utilities/ListTable';

class CurrentUsers extends Component {
  render() {

    const headers = [
      {title: "First Name", key: "firstName"}, 
      {title: "Last Name", key: "lastName"}, 
      {title: "Username", key: "username"}, 
      {title: "Team Name", key: "team.name"}
    ];

    return (
      <Container>
        { 
          !this.props.data.loading ? 
            <ListTable 
              headers={headers} 
              items={this.props.data.memberGetAll}
            /> : null
        }
      </Container>
    );
  }
}

const CurrentUserQuery = gql`
  query CurrentUserQuery  {
    memberGetAll {
      id
      isLeader
      username
      profile {
        firstName
        lastName
        email
      }
      team {
        name
      }
    }
  }
`;

export default graphql(CurrentUserQuery)(CurrentUsers);