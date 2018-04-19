const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

module.exports.CategoryType = new GraphQLObjectType({
  name: 'CategoryType',
  description: 'An object representing the points for a category',
  fields: () => ({
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    points: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  }),
});
