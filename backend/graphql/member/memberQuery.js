const { GraphQLList } = require('graphql');
const { MemberOperations } = require('./memberOperations');
const { MemberType } = require('./memberType');
const { GetMemberByEmailPasswordInput } = require('./input');

const memberOperations = new MemberOperations();

module.exports.MemberQuery = {
  memberGetByEmailPassword: {
    type: MemberType,
    args: {
      input: { type: GetMemberByEmailPasswordInput },
    },
    resolve: (source, args) => {
      return memberOperations.memberGetByUsernamePassword(args.input);
    },
  },
  memberGetAll: {
    type: new GraphQLList(MemberType),
    resolve: (source, args, context) => {
      return memberOperations.memberGetAll(args.input, context);
    },
  },
};
