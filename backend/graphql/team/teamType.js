const { GraphQLObjectType, GraphQLList, GraphQLString } = require('graphql');

const { MemberModel } = require('../../dynamodb/models/memberModel');

module.exports.TeamType = new GraphQLObjectType({
  name: 'TeamType',
  description: 'An object representing a single team',
  fields: () => {
    const { MemberType } = require('../member/memberType');
    return ({
      name: {
        type: GraphQLString,
        resolve: (source) => source,
      },
      leaders: {
        type: new GraphQLList(MemberType),
        resolve: (source) => {
          if (source) {
            return MemberModel.query({ team: source })
              .filter('isLeader').eq(true).exec();
          } else {
            return [];
          }
        },
      },
      members: {
        type: new GraphQLList(MemberType),
        resolve: (source) => {
          if (source) {
            return MemberModel.query({
              team: source,
            }).exec();
          } else {
            return [];
          }
        },
      },
    });
  },
});
