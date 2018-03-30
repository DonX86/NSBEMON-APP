import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLInt } from 'graphql';

export const CreateCategoryInput = new GraphQLInputObjectType({
  name: 'CreateCategoryInput',
  description: 'The input type for creating a category.',
  fields: {
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    points: {
      type: new GraphQLNonNull(GraphQLInt),
    }
  }
});