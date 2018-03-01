import React from 'react';
import { Container } from 'reactstrap';

import AddUser from './adminComponents/AddUser';
import AddTeam from './adminComponents/AddTeam';
import DeleteUser from './adminComponents/DeleteUser';
import MakeCategory from './adminComponents/MakeCategory';

const AdminView = (props) => {
  return (
    <Container>
      <AddUser/>
      <DeleteUser/>
      <AddTeam/>
      <MakeCategory/>

    </Container>
  );
};

export default AdminView;
