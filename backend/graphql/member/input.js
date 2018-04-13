const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
} = require('graphql');

module.exports.CreateMemberInput = new GraphQLInputObjectType({
  name: 'CreateMemberInput',
  fields: () => ({
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    isLeader: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
  }),
});

module.exports.GetMemberByEmailPasswordInput = new GraphQLInputObjectType({
  name: 'GetMemberByUsernamePasswordInput',
  fields: () => ({
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});

module.exports.AssociateMemberTeamInput = new GraphQLInputObjectType({
  name: 'AssocAssociateMemberTeamInput',
  description: 'Add a member to a team.',
  fields: () => ({
    memberEmails: {
      type: new GraphQLNonNull(GraphQLID),
    },
    team: {
      type: new GraphQLNonNull(GraphQLID),
    },
  }),
});
