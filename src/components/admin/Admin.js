import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { Load } from '../utilities/Load';
import { AdminView } from './AdminView';

class AdminComponent extends React.Component {

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
};

// Attach the data from the server
const AdminComponentQuery = gql`
  query AdminComponentQuery {
    viewer {
      id
    }
  }
`
export const Admin = graphql(AdminComponentQuery)(AdminComponent);
