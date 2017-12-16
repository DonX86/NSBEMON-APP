import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInterfaceType,
} from 'graphql'

import { NodeInterface } from '../../interfaces/nodeInterface';
import { TeamType } from '../team/teamType';

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
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    isLeader: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    team: {
      type: TeamType
    }
  }),
  isTypeOf: (item) => item instanceof User,
});
