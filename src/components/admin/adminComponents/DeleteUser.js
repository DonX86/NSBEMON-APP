import React from "react";
import { Button, Form, FormGroup, Label, Input} from "reactstrap";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class DeleteUser extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleUser">Delete User</Label>
          <Input
            type="email"
            name="user name"
            id="exampleUser"
            placeholder="Enter User Name"
          />
          <Button>Submit</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default DeleteUser;