import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Load from '../utilities/Load';
import ProfileView from './ProfileView';

class ProfileComponent extends React.Component {

  render() {
    // Gather the props from the apollo call
    const { data: { loading, error, viewer }} = this.props;

    return (
      <Load
        loading={loading}
        error={error}
        onLoad={() => <ProfileView viewer={viewer} />}
      />
    );
  }
};

// Attach the data from the server
const ProfileComponentQuery = gql`
  query ProfileComponentQuery {
    viewer {
      firstName
      lastName
      trainings {
        approved
        category {
          title
          points
        }
      }
    }
  }
`
export default graphql(ProfileComponentQuery)(ProfileComponent);
