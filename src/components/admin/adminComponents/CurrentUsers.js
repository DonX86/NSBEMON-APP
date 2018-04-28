import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Container, Input, Button } from 'reactstrap';
import ListTable from '../../utilities/ListTable';
import _ from 'lodash';
import Load from '../../utilities/Load';

class CurrentUsers extends Component {

  transformMembers = (members) => {
    const inputMembers = members.map((member) => {
      const newMember = {...member};
      _.set(newMember, 'firstName', <Input type="text" defaultValue={member.firstName} />);
      _.set(newMember, 'lastName', <Input type="text" defaultValue={member.lastName} />);
      _.set(newMember, 'email', <Input type="email" readOnly defaultValue={member.email} />);
      _.set(newMember, 'team', {name: <Input type="text" defaultValue={member.team.name} />});
      newMember.button =  <Button className="btn btn-danger">Delete</Button>;
      return newMember;
    });

    inputMembers.unshift({
      firstName: <Input type="text" />,
      lastName: <Input type="text" />,
      email: <Input type="email" />,
      team: {
        name: <Input type="text" />,
      },
      button: <Button className="btn btn-success">Add</Button>
    });

    return inputMembers;
  }

  render() {

    const headers = [
      {title: "First Name", key: "firstName"}, 
      {title: "Last Name", key: "lastName"}, 
      {title: "Email", key: "email"}, 
      {title: "Team Name", key: "team.name"},
      {title: "", key: "button"},
    ];

    return (
      <Container>
        <Load
          loading={this.props.data.loading}
          error={this.props.data.error}
          onLoad={() => (
            <ListTable 
              headers={headers} 
              items={this.transformMembers(this.props.data.memberGetAll)}
            />
          )}
        />

      </Container>
    );
  }
}

const CurrentUserQuery = gql`
  query CurrentUserQuery  {
    memberGetAll {
      email
      isLeader
      firstName
      lastName
      team {
        name
      }
    }
  }
`;

export default graphql(CurrentUserQuery)(CurrentUsers);