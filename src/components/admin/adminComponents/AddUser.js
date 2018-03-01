import React from "react";
import { Button, Form, FormGroup, Label, Input} from "reactstrap";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class AddUser extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleUser">Add New User</Label>
          <Input
            type="name"
            name="user"
            id="exampleUser"
            placeholder="Enter New User"
          />
          <Button>Submit</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default AddUser;
