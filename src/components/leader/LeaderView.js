import React from 'react';
import {
  Container,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  ListGroupItemText,
  ListGroupItemHeading
} from 'reactstrap';

import LeaderProfile from './LeaderProfile';

const LeaderView = (props) => {
  return (
    <Container>
      <Row>
        <Col xs="12" sm="12" md="4">
          <img src="public/images/pokemon_profile.jpg" className="float-left img-thumbnail" alt="Leader Profile Picture" />
        </Col>
        <Col style={{marginTop: "25px"}}>
          <LeaderProfile viewer={props.viewer} />
        </Col>
      </Row>
    </Container>
  )
};

export default LeaderView;
