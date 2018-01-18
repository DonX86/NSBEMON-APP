import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql'

import { NodeInterface } from '../../interfaces/nodeInterface';
import { ProfileType } from './profileType';
import { TeamType } from '../team/teamType';
import { generateTeam, generateProfile } from '../dataGenerators';

export class User {
  constructor(input) {
    this.id = input.id;
    this.firstName = input.firstName;
    this.lastName = input.lastName;
    this.isLeader = input.isLeader;
    this.team = input.team;
  }
}

export const UserType = new GraphQLObjectType({
  name: 'UserType',
  description: 'An object representing a single user',
  interfaces: [ NodeInterface ],
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
  }),
  isTypeOf: (item) => item instanceof User,
});
