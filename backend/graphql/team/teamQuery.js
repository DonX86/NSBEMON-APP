const { GraphQLList } = require('graphql');
const { TeamOperations } = require('./teamOperations');
const { TeamType } = require('./teamType');

const teamOperations = new TeamOperations();

module.exports.TeamQuery = {
  teamGetAll: {
    type: new GraphQLList(TeamType),
    resolve: async () => {
      return teamOperations.teamGetAll();
    },
  },
};
