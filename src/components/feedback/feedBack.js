import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class feedBack extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default feedBack;
