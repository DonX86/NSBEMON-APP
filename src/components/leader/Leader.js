import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { Load } from '../utilities/Load';
import { LeaderView } from './LeaderView';

class LeaderComponent extends React.Component {

  render() {
    // Gather the props from the apollo call
    const { data: { loading, error, viewer }} = this.props;

    return (
      <Load
        loading={loading}
        error={error}
        onLoad={<LeaderView viewer={viewer} />}
      />
    );
  }
};

// Attach the data from the server
const LeaderComponentQuery = gql`
  query LeaderComponentQuery {
    viewer {
      id
      isLeader
      team {
        name
        leader {
          id
          profile {
            firstName
            lastName
          }
        }
      }
    }
  }
`
export const Leader = graphql(LeaderComponentQuery)(LeaderComponent);
