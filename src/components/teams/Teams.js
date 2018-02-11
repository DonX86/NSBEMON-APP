import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Load from '../utilities/Load';
import TeamsView from './TeamsView';

class Teams extends React.Component {

  render() {
    // Gather the props from the apollo call
    const { data: { loading, error, teams }} = this.props;

    return (
      <Load
        loading={loading}
        error={error}
        onLoad={<TeamsView teams={teams} />}
      />
    );
  }
};

// Attach the data from the server
const TeamsQuery = gql`
  query TeamsQuery {
    teams {
      id
      name
      leader {
        profile {
          firstName
          lastName
        }
      }
      members {
        profile {
          categories {
            points
          }
        }
      }
    }
  }
`
export default graphql(TeamsQuery)(Teams);
