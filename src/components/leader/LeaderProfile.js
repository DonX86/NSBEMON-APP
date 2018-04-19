import React from 'react';
import {
  Row,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  ListGroupItemText,
  ListGroupItemHeading,
} from 'reactstrap';

const LeaderProfile = (props) => {
  return (
    <Container>
      <Row>
        <Col xs="12" sm="12" md="4">
          <img
            src="public/images/pokemon_profile.jpg"
            className="float-left img-thumbnail"
            alt="Leader Profile Picture"
          />
        </Col>
        <Col style={{ marginTop: '25px' }}>
          <ListGroup>
            <ListGroupItem active>
              <ListGroupItemHeading>Team Leader</ListGroupItemHeading>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>First Name</ListGroupItemHeading>
              <ListGroupItemText>{props.leader.firstName}</ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>Last Name</ListGroupItemHeading>
              <ListGroupItemText>{props.leader.lastName}</ListGroupItemText>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default LeaderProfile;
