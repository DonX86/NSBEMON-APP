import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default class AddCategory extends React.Component{
  render(){
    return(
      <Form>
        <FormGroup>
          <Label for="categoryTitle">Title</Label>
          <Input type="text" id="categoryTitle" placeholder="A title for the category..." />
        </FormGroup>
        <FormGroup>
          <Label for="categoryPoints">Points</Label>
          <Input type="number" min="1" max="100" id="categoryPoints" placeholder="A point value for the category..." />
        </FormGroup>
        <Button>Submit</Button>
      </Form>  
    );
  }
}
