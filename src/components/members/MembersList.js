import React from 'react';
import { Row, Col, Container} from 'reactstrap';

import MemberItem from './MemberItem';

const MembersList = (props) => {
  return props.members.map(member => (
    <Container key={'member_' + member.email} >
      <Row>
        <Col>
          <MemberItem member={member} />
        </Col>
      </Row>
      <br/>
    </Container>
  ));
};

export default MembersList;
