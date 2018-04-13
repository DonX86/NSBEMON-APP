const { GraphQLObjectType } = require('graphql');

const { MemberType } = require('../member/memberType');
const { MemberQuery } = require('../member/memberQuery');
const { MemberModel } = require('../../dynamodb/models/memberModel');

module.exports.RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'The root query',
  fields: () => ({
    ...MemberQuery,
    viewer: {
      type: MemberType,
      resolve: async (source, args, context) => {
        return MemberModel.queryOne({
          email: context.__viewerEmail,
        }).exec();
      },
    },
  }),
});
