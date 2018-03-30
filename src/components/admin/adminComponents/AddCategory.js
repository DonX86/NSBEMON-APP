import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default class AddCategory extends React.Component{
  render(){
    return(
      <Form>
        <FormGroup>
          <Label for="addCategory">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          <Button>Submit</Button>
        </FormGroup>
      </Form>  
    );
  }
}
