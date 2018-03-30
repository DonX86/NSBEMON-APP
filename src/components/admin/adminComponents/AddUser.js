import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';

export default class AddUser extends React.Component{
  render(){
    return(
      <FormGroup>
      <Form>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          <Button>Submit</Button>
      </Form>
      <Form>
      <Label for="firstName">Name</Label>
          <Input type="String" name= "name" id="firstName" placeholder="with a placeholder" />
      </Form>
            <Form>
      <Label for="lastName">Name</Label>
          <Input type="String" name= "name" id="lastName" placeholder="with a placeholder" />
      </Form>
      <Form>
      <Label for="isLeader">Leaser</Label
          <Input type="Boolean" name= "name" id="lastName" placeholder="with a placeholder" />
      </Form>
      </FormGroup> 
    );
  }
}
