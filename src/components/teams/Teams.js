import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Load from '../utilities/Load';
import TeamsView from './TeamsView';

class Teams extends React.Component {

  render() {
    // Gather the props from the apollo call
    const { data: { loading, error, teamGetAll }} = this.props;

    return (
      <Load
        loading={loading}
        error={error}
        onLoad={() => <TeamsView teams={teamGetAll} />}
      />
    );
  }
}

// Attach the data from the server
const TeamsQuery = gql`
  query TeamsQuery {
    teamGetAll {
      name
      leaders {
        firstName
        lastName
      }
      members {
        trainings {
          category {
            title
            points
          }
        }
      }
    }
  }
`;
export default graphql(TeamsQuery)(Teams);
