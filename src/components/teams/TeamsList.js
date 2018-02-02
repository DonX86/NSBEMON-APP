import React from 'react';
import { Row, Col, Container} from 'reactstrap';

import { TeamItem } from './TeamItem';

const TeamsList = (props) => {
  return props.teams.map(team => (
    <Container key={'team_' + team.id} >
      <Row>
        <Col>
          <TeamItem team={team} />
        </Col>
      </Row>
      <br/>
    </Container>
  ));
};

export { TeamsList };
