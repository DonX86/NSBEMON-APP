import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemText,
  ListGroupItemHeading,
  Progress,
} from 'reactstrap';

import { calculatePoints } from '../../utilities/calculatePoints';

const Points = (props) => {

  const progress = props.item.points % 10;
  const level = Math.floor(props.item.points / 10);

  return (
    <ListGroup>
      <ListGroupItem active>
        <ListGroupItemHeading>Category</ListGroupItemHeading>
        <ListGroupItemText>
          { props.item.label }
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading><b>Points</b> {props.item.points} <br/> <b>Level</b> {level}</ListGroupItemHeading>
        <Progress animated color="success" value={progress} />
      </ListGroupItem>
    </ListGroup>
  );
};

export default Points;
