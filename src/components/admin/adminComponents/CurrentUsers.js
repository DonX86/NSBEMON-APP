import React, { Component } from 'react';
import { Container, Table } from 'reactstrap';

const ListUsers = (props) => {
  return (
    props.users.map((user, index) => (
      <tr key={index}>
        <th scope="row">{index}</th>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.team.name}</td>
      </tr>
    ))
  )
}



class CurrentUsers extends Component {
  render() {
    return (
      <Container>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Team Name</th>
            </tr>
          </thead>
          <tbody>
            <ListUsers users={[{id: "1", firstName: "A", lastName: "B", email: "a@g.co", team: { name: "Team1"}}]} />
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default CurrentUsers;