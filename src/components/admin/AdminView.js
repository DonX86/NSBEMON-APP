import React from 'react';
import { Container } from 'reactstrap';

import { AddUser } from './adminComponents/AddUser';

const AdminView = (props) => {
  return (
    <Container>
      <AddUser />
    </Container>
  );
};

export { AdminView };
