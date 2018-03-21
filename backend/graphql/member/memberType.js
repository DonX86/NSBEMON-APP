import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import { ProfileType } from '../profile//profileType';
import { TeamType } from '../team/teamType';
import { TrainingType } from '../training/trainingType';

export const MemberType = new GraphQLObjectType({
  name: 'MemberType',
  description: 'An object representing a single user',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    isLeader: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    trainings: {
      type: new GraphQLList(TrainingType),
      resolve: (source) => source.Trainings,
    },
    profile: {
      type: ProfileType,
      resolve: (source) => source.Profile,
    },
    team: {
      type: TeamType,
      resolve: (source) => source.Team,
    },
  }),
});
