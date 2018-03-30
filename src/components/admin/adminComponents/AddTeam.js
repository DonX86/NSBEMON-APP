import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default class AddTeam extends React.Component{
  render(){
    return(
      <Form>
        <FormGroup>
          <Label for="AddTeam">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          <Button>Submit</Button>
        </FormGroup>
      </Form>  
    );
  }
}
