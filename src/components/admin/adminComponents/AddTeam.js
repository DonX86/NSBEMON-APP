import React from "react";
import { Button, Form, FormGroup, Label, Input} from "reactstrap";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class AddTeam extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleTeam">Create New Team</Label>
          <Input
            type="name"
            name="team_name"
            id="exampleTeam"
            placeholder="Enter Team Name"
          />
          <Button>Submit</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default AddTeam;