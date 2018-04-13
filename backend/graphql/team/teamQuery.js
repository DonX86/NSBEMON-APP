const { GraphQLList } = require('graphql');

const { TeamType } = require('./teamType');

module.exports.TeamQuery = {
  teamGetAll: {
    type: new GraphQLList(TeamType),
    resolve: async () => {
      // Get teams from S3

      return null;
    },
  },
};
