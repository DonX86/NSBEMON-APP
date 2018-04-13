const { GraphQLNonNull } = require('graphql');

const { TeamType } = require('./teamType');
const { TeamOperations } = require('./teamOperations');
const { CreateTeamInput } = require('./input');

const teamOperations = new TeamOperations();

module.exports.TeamMutation = {
  teamCreate: {
    type: TeamType,
    args: {
      input: {
        type: new GraphQLNonNull(CreateTeamInput),
      },
    },
    resolve: (source, args, context) => {
      return teamOperations.teamCreate(args.input, context);
    },
  },
};
