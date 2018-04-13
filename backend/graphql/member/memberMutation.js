const { GraphQLNonNull } = require('graphql');
const { MemberOperations } = require('./memberOperations');
const { MemberType } = require('./memberType');
const { CreateMemberInput, AssociateMemberTeamInput } = require('./input');

const memberOperations = new MemberOperations();

module.exports.MemberMutation = {
  memberCreate: {
    type: MemberType,
    args: {
      input: {
        type: new GraphQLNonNull(CreateMemberInput),
      },
    },
    resolve: (source, args) => {
      return memberOperations.memberCreate(args.input);
    },
  },
  memberAddToTeam: {
    type: MemberType,
    args: {
      input: {
        type: new GraphQLNonNull(AssociateMemberTeamInput),
      },
    },
    resolve: (source, args, context) => {
      return memberOperations.memberAddToTeam(args.input, context);
    },
  },
};
