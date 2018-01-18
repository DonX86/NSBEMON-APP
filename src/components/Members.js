import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const MembersList = (props) => {
  return (
    <ul>
      {
        props.members.map(member => (
          <li key={member.id}>
            Member Id: {member.id}
          </li>
        ))
      }
    </ul>
  )
}

class MembersComponent extends React.Component {

  render() {
    // Gather the props from the apollo call
    const { data: { loading, error, viewer }} = this.props;

    if (loading) {
      return (<h1> Loading </h1>);
    } else if (error) {
      return (<h1> There was an error </h1>);
    } else {
      return (
        <div>
          <h1> Members component </h1>
          <MembersList
            members={viewer.team.members}
          />
        </div>
      );
    }
  }
};

// Attach the data from the server
const MembersComponentQuery = gql`
  query MembersComponentQuery {
    viewer {
      team {
        members {
          id
        }
      }
    }
  }
`
export const Members = graphql(MembersComponentQuery)(MembersComponent);
