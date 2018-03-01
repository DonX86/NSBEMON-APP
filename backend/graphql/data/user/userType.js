import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLBoolean,
} from 'graphql'

import { ProfileType } from './profileType';
import { TeamType } from '../team/teamType';
import { generateTeam, generateProfile } from '../dataGenerators';

export const UserType = new GraphQLObjectType({
  name: 'UserType',
  description: 'An object representing a single user',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    profile: {
      type: ProfileType,
      resolve: (user) => {
        console.log(user);
        return generateProfile();
      }
    },
    isLeader: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    team: {
      type: TeamType,
      resolve: (user) => {
        console.log(user);
        return generateTeam();
      },
    }
  })
});
