import React from 'react';
import { Alert } from 'reactstrap';

import LeaderProfile from './LeaderProfile';

const LeaderView = (props) => {
  if (props.viewer.team && props.viewer.team.leaders) {
    return props.viewer.team.leaders.map((leader) => (
      <LeaderProfile key={'leader_' + leader.firstName} leader={leader} />
    ));
  } else {
    return (
      <Alert color="danger">
        <h1> You do not have a team or leaders assigned. </h1>
      </Alert>
    );
  }
};

export default LeaderView;
