import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemText,
  ListGroupItemHeading,
  Progress,
} from 'reactstrap';

const Points = (props) => {

  const progress = props.item.category.points % 10;
  const level = Math.floor(props.item.category.points / 10);

  return (
    <ListGroup>
      <ListGroupItem active>
        <ListGroupItemHeading>Category</ListGroupItemHeading>
        <ListGroupItemText>
          { props.item.category.title }
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading><b>Points</b> {props.item.category.points} <br/> <b>Level</b> {level}</ListGroupItemHeading>
        <Progress animated color="success" value={progress} />
      </ListGroupItem>
    </ListGroup>
  );
};

export default Points;
