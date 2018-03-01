import React from "react";
import { Button, Form, FormGroup, Label, Input} from "reactstrap";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class MakeCategory extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleCategory">Create New Category</Label>
          <Input
            type="name"
            name="category_name"
            id="exampleCategory"
            placeholder="Enter New Category"
          />
          <Button>Submit</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default MakeCategory;