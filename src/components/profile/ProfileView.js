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
import { PointsVerticalList } from './points/PointsVerticalList';

const ProfileView = (props) => {
  return (
    <Container>
      <Row>
        <Col xs="12" sm="12" md="4">
          <img src="public/images/pokemon_profile.jpg" className="float-left img-thumbnail" alt="Viewer Profile Picture" />
        </Col>
        <Col>
          <ProfileProfile viewer={props.viewer} />
        </Col>
      </Row>
      <br/>
      <Row>
        <PointsVerticalList categories={props.viewer.profile.categories} />
      </Row>
    </Container>
  )
};

export { ProfileView };
