const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

module.exports.CreateCategoryInput = new GraphQLInputObjectType({
  name: 'CreateCategoryInput',
  description: 'The input type for creating a category.',
  fields: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    points: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
});
