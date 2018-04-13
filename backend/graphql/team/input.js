const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

module.exports.CreateTeamInput = new GraphQLInputObjectType({
  name: 'CreateTeamInput',
  description: 'The input type for creating a team.',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});
