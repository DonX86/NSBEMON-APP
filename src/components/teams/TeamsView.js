import React from 'react';
import { Container } from 'reactstrap';

import TeamsList from './TeamsList';

const TeamsView = (props) => {
  return (
    <Container>
      <TeamsList
        teams={props.teams}
      />
    </Container>
  );
};

export default TeamsView;
