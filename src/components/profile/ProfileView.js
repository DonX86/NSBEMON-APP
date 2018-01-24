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

import { ProfileProfile } from './ProfileProfile';

const ProfileView = (props) => {
  return (
    <Container>
      <Row>
        <Col xs="auto">
          <img src="public/images/profile-placeholder.jpg" className="float-left" alt="Viewer Profile Picture" />
        </Col>
        <Col>
          <ProfileProfile viewer={props.viewer} />
        </Col>
      </Row>
    </Container>
  )
};

export { ProfileView };
