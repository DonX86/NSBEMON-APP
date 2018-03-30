import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';

export const CreateMemberInput = new GraphQLInputObjectType({
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

export const GetMemberByUsernamePasswordInput = new GraphQLInputObjectType({
  name: 'GetMemberByUsernamePasswordInput',
  fields: () => ({
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    }
  })
});

export const AssociateMemberTeamInput = new GraphQLInputObjectType({
  name: 'AssocAssociateMemberTeamInput',
  description: 'Add a member to a team.',
  fields: () => ({
    memberId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    teamId: {
      type: new GraphQLNonNull(GraphQLID),
    }
  })
});
