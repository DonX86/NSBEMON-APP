import React from 'react';
import { Container, Alert } from 'reactstrap';

import MembersList from './MembersList';

const MembersView = (props) => {

  if (props.viewer.team && props.viewer.team.members) {
    return (
      <Container>
        <MembersList
          members={props.viewer.team.members}
        />
      </Container>
    );
  } else {
    return (
      <Alert color="danger">
          <h1> You do not have a team or team members assigned. </h1>
      </Alert>
    )
  }
};

export default MembersView;
