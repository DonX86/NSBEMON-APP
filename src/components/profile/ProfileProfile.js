import React from 'react';
import {
  Container,
  ListGroup,
  ListGroupItem,
  ListGroupItemText,
  ListGroupItemHeading,
  Progress,
} from 'reactstrap';

import { calculatePoints } from '../utilities/calculatePoints';

const ProfileProfile = (props) => {

  const points = calculatePoints(props.viewer.trainings);
  const progress = points % 10;
  const level = Math.floor(points / 10);

  return (
    <Container>
      <ListGroup>
        <ListGroupItem active>
          <ListGroupItemHeading>Profile</ListGroupItemHeading>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>First Name</ListGroupItemHeading>
          <ListGroupItemText>
            { props.viewer.profile.firstName }
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Last Name</ListGroupItemHeading>
          <ListGroupItemText>
            { props.viewer.profile.lastName }
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading><b>Points</b> {points} <br/> <b>Level</b> {level}</ListGroupItemHeading>
          <Progress animated color="success" value={progress} />
        </ListGroupItem>
      </ListGroup>
    </Container>
  );
};

export default ProfileProfile ;
