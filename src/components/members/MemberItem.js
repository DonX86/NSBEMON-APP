import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Container,
  Col,
  Row,
  Progress,
} from 'reactstrap';

import { calculatePoints } from '../utilities/calculatePoints';

const MemberItem = (props) => {

  const points = calculatePoints(props.member.profile.categories);
  const progress = points % 10;
  const level = Math.floor(points / 10);

  return (
    <Container>
      <Row>
        <Col xs="12" sm="12" md="4">
          <img src="public/images/pokemon_profile.jpg" className="float-left img-thumbnail" alt="Leader Profile Picture" />
        </Col>
        <Col style={{marginTop: "25px"}}>
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
        </Col>
      </Row>
    </Container>
  );
};

export default MemberItem;
