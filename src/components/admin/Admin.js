import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Load from '../utilities/Load';
import AdminView from './AdminView';

class Admin extends React.Component {

  render() {
    // Gather the props from the apollo call
    const { data: { loading, error, admin }} = this.props;

    return (
      <Load
        loading={loading}
        error={error}
        onLoad={<AdminView admin={admin} />}
      />
    );
  }
}

// Attach the data from the server
const AdminQuery = gql`
  query AdminQuery {
    viewer {
      id
    }
  }
`;

export default graphql(AdminQuery)(Admin);
