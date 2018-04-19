import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Load from '../utilities/Load';
import MembersView from './MembersView';

class Members extends React.Component {

  render() {
    // Gather the props from the apollo call
    const { data: { loading, error, viewer }} = this.props;

    return (
      <Load
        loading={loading}
        error={error}
        onLoad={() => <MembersView team={viewer.team} />}
      />
    );
  }
}

// Attach the data from the server
const MembersQuery = gql`
  query MembersQuery {
    viewer {
      team {
        members {
          email
          firstName
          lastName
          trainings {
            category {
              points
            }
          }
        }
      }
    }
  }
`;
export default graphql(MembersQuery)(Members);
