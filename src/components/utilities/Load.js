import React from 'react';

import { Alert } from 'reactstrap';

class Load extends React.Component {

  render() {
    // Gather the props from the apollo call
    const { loading, error, onLoad} = this.props;

    if (loading) {
      return (
        <div id="loader"></div>
      );
    } else if (error) {
      return (
        <Alert color="danger">
          <h1><strong>Error!</strong> Couldn't fetch the data </h1>
        </Alert>
      );
    } else {
      return onLoad();
    }
  }
}

export default Load;
