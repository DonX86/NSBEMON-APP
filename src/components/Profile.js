import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class ProfileComponent extends React.Component {

  render() {
    // Gather the props from the apollo call
    const { data: { loading, error, viewer }} = this.props;

    if (loading) {
      return (<h1> Loading </h1>);
    } else if (error) {
      return (<h1> There was an error </h1>);
    } else {
      return (
        <div>
          <h1> Profile component </h1>
          <h3> First Name: {viewer.profile.firstName} </h3>
          <h3> Last Name: {viewer.profile.lastName} </h3>
          <h3> Points: {viewer.profile.points} </h3>
        </div>
      );
    }
  }
};

// Attach the data from the server
const ProfileComponentQuery = gql`
  query ProfileComponentQuery {
    viewer {
      profile {
        firstName
        lastName
        points
      }
    }
  }
`
export const Profile = graphql(ProfileComponentQuery)(ProfileComponent);
