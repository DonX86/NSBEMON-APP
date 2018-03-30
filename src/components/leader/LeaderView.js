import React from 'react';
import {
  Container,
  Col,
  Row,
  Alert
} from 'reactstrap';

import LeaderProfile from './LeaderProfile';

const LeaderView = (props) => {
  
  
  if (props.viewer.team && props.viewer.team.leader) {
    return (
      <Container>
        <Row>
          <Col xs="12" sm="12" md="4">
            <img src="public/images/pokemon_profile.jpg" className="float-left img-thumbnail" alt="Leader Profile Picture" />
          </Col>
          <Col style={{ marginTop: '25px' }}>
            <LeaderProfile viewer={props.viewer} />
          </Col>
        </Row>
      </Container>
    ); 
  } else {
    return (
      <Alert color="danger">
          <h1> You do not have a team or leader assigned. </h1>
      </Alert>
    )
  }
};

export default LeaderView;
