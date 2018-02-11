import React from 'react';
import { Container } from 'reactstrap';

import MembersList from './MembersList';

const MembersView = (props) => {
  return (
    <Container>
      <MembersList
        members={props.viewer.team.members}
      />
    </Container>
  );
};

export default MembersView;
