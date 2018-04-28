import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Button, Input, Container} from 'reactstrap';
import Load from '../../utilities/Load';
import _ from 'lodash';
import ListTable from '../../utilities/ListTable';

class CurrentCategories extends React.Component {

  transformCategories = (categories) => {
    const inputCategories = categories.map((category) => {
      const newCategory = {...category};
      _.set(newCategory, 'title', <Input type="text" defaultValue={category.title} />);
      _.set(newCategory, 'points', <Input type="number" defaultValue={category.points} min="1" max="100" />);
      newCategory.button =  <Button className="btn btn-danger">Delete</Button>;
      return newCategory;
    });

    inputCategories.unshift({
      title: <Input type="text" />,
      points: <Input type="number" min="1" max="100" />,
      button: <Button className="btn btn-success">Add</Button>
    });

    return inputCategories;
  }

  render() {

    const headers = [
      {title: "Title", key: "title"}, 
      {title: "Points", key: "points"},
      {title: "", key: "button"},
    ];

    return (
      <Container>
        <Load
          loading={this.props.data.loading}
          error={this.props.data.error}
          onLoad={() => (
            <ListTable
              headers={headers} 
              items={this.transformCategories(this.props.data.categoryGetAll)}
            />
          )}
        />

      </Container>
    );
  }
}

const CurrentCategoriesQuery = gql`
  query CurrentCategoriesQuery {
    categoryGetAll {
      title
      points
    }
  }
`;

export default graphql(CurrentCategoriesQuery)(CurrentCategories);