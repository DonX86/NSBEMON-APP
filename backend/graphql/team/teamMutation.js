import {
  GraphQLNonNull,
} from 'graphql';

import { TeamType } from './teamType';
import TeamOperations from './teamOperations';
import { CreateTeamInput } from './mutationInput';

const teamOperations = new TeamOperations();

export const TeamMutation = {
  teamCreate: {
    type: TeamType,
    args: {
      input: {
        type: new GraphQLNonNull(CreateTeamInput),
      }
    },
    resolve: (source, args, context) => {
      return teamOperations.teamCreate(args.input, context);
    }
  }
};