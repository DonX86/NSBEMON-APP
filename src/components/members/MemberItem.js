import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Progress,
} from 'reactstrap';

import { calculatePoints } from '../utilities/calculatePoints';

const MemberItem = (props) => {

  const points = calculatePoints(props.member.profile.categories);
  const progress = points % 10;
  const level = Math.floor(points / 10);

  return (
    <ListGroup>
      <ListGroupItem active>
        <ListGroupItemHeading>Name</ListGroupItemHeading>
        <ListGroupItemText>
          {props.member.profile.firstName} {props.member.profile.lastName}
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading><b>Points</b> {points} <br/> <b>Level</b> {level}</ListGroupItemHeading>
        <Progress animated color="warning" value={progress} />
      </ListGroupItem>
    </ListGroup>
  );
};

export { MemberItem };
