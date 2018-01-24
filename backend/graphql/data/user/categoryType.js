import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql'

export const CategoryType = new GraphQLObjectType({
  name: 'CategoryType',
  description: 'An object representing the points for a category',
  fields: () => ({
    label: {
      type: new GraphQLNonNull(GraphQLString),
    },
    points: {
      type: new GraphQLNonNull(GraphQLInt),
    }
  }),
});
