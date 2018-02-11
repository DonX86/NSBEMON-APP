import React from 'react';
import {
  Container,
  ListGroup,
  ListGroupItem,
  ListGroupItemText,
  ListGroupItemHeading
} from 'reactstrap';

const LeaderProfile = (props) => {
  return (
    <Container>
      <ListGroup>
        <ListGroupItem active>
          <ListGroupItemHeading>{props.viewer.team.name} Team Leader</ListGroupItemHeading>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>First Name</ListGroupItemHeading>
          <ListGroupItemText>
            { props.viewer.team.leader.profile.firstName }
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Last Name</ListGroupItemHeading>
          <ListGroupItemText>
            { props.viewer.team.leader.profile.lastName }
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    </Container>
  );
};

export default LeaderProfile;
