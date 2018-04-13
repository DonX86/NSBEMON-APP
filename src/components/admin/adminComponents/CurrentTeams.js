import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Container } from 'reactstrap';


class CurrentTeams extends Component {
  render() {
    return (
      <Container>
        <h1>hello</h1>
      </Container>
    );
  }
}

const CurrentTeamsQuery = gql`
  query CurrentTeamsQuery  {
    teamGetAll {
      id
      title
    }
  }
`;

export default graphql(CurrentTeamsQuery)(CurrentTeams);