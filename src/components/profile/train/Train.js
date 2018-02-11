import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import {
  Container,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Button,
  Row,
  Col,
  Image,
} from 'reactstrap';

const CategoriesList = (props) => {
  return props.categories.map((item, i) => (
    <option key={'category_' + i}>
      {item}
    </option>
  ));
}

class Train extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      category: '',
      imageFile: null,
      imagePreviewUrl: null,
    };
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  }

  handleCategoryChange = (event) => {
    this.setState({
      category: event.target.value,
    });
  }

  handleImageChange = (event) => {
    event.preventDefault();

    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        imageFile: file,
        imagePreviewUrl: reader.result,
      });
    }
    reader.readAsDataURL(file);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.history.goBack();
  }

  handleCancel = () => {
    this.props.history.goBack();
  }

  render() {

    let $imagePreview = null;
    if (this.state.imagePreviewUrl) {
      $imagePreview = (<img className="img-thumbnail" src={this.state.imagePreviewUrl} />);
    }

    return (
      <Container>
        <Row>
          <Form>
            <FormGroup>
              <Label for="trainingTitle">Title</Label>
              <Input
                maxLength="25"
                id="trainingTitle"
                type="text"
                placeholder="A title for your training..."
                value={this.state.title}
                onChange={(e) => this.handleTitleChange(e)}
             />
            </FormGroup>
            <FormGroup>
              <Label for="trainingDescription">Description</Label>
              <Input
                maxLength="100"
                id="trainingDescription"
                type="text"
                placeholder="A very short description of your training..."
                value={this.state.description}
                onChange={(e) => this.handleDescriptionChange(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="trainingCategory">Category</Label>
              <Input
                type="select"
                id="trainingCategory"
                value={this.state.category}
                onChange={(e) => this.handleCategoryChange(e)}
              >
                <CategoriesList categories={["", "one", "two"]} />
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="trainingImage">Image</Label>
              <Input
                accept="image/jpeg, image/png"
                type="file"
                id="trainingImage"
                value={this.state.image}
                onChange={(e) => this.handleImageChange(e)}
              />
              <FormText color="muted">
                A jpeg or png image that will help your team leader approve your training.
              </FormText>
              {$imagePreview}
            </FormGroup>
          </Form>
        </Row>
        <Row>
          <Button onClick={(e) => this.handleSubmit(e)} outline color="success">Submit</Button>
          <Button onClick={this.handleCancel} outline >Cancel</Button>
        </Row>
      </Container>
    );
  }
}

export default Train;
