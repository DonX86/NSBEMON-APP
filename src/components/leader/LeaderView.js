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

import { LeaderProfile } from './LeaderProfile';

const LeaderView = (props) => {
  return (
    <Container>
      <Row>
        <Col xs="auto">
          <img src="public/images/profile-placeholder.jpg" className="float-left" alt="Leader Profile Picture" />
        </Col>
        <Col>
          <LeaderProfile viewer={props.viewer} />
        </Col>
      </Row>
    </Container>
  )
};

export { LeaderView };
