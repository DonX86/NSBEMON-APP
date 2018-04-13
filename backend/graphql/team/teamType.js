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
        resolve: (source) => source.team,
      },
      leader: {
        type: MemberType,
        resolve: (source) => {
          return MemberModel.queryOne({
            team: source.team,
            isLeader: true,
          }).exec();
        },
      },
      members: {
        type: new GraphQLList(MemberType),
        resolve: (source) => {
          return MemberModel.query({
            team: source.team,
          }).exec();
        },
      },
    });
  },
});
