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

import { calculateTeamPoints } from '../utilities/calculatePoints';

const TeamItem = (props) => {

  const points = calculateTeamPoints(props.team.members);
  const progress = points % 10;
  const level = Math.floor(points / 10);

  return (
    <Container>
      <Row>
        <Col xs="12" sm="12" md="4">
          <img src="public/images/pokemon_profile.jpg" className="float-left img-thumbnail" alt="Team Picture" />
        </Col>
        <Col style={{marginTop: "25px"}}>
          <ListGroup>
            <ListGroupItem active>
              <ListGroupItemHeading>Team</ListGroupItemHeading>
              <ListGroupItemText>
                {props.team.name}
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

export { TeamItem };
