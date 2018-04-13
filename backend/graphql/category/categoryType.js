const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
} = require('graphql');

module.exports.CategoryType = new GraphQLObjectType({
  name: 'CategoryType',
  description: 'An object representing the points for a category',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    points: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  }),
});
