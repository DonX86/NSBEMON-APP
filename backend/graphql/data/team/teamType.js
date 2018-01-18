import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql'

import { NodeInterface } from '../../interfaces/nodeInterface';
import { UserType } from '../user/userType';
import { generateUser } from '../dataGenerators';

export class Team {
  constructor(input) {
    this.id = input.id;
    this.name = input.name;
    this.leader = input.leader;
    this.members = input.members;
  }
}

export const TeamType = new GraphQLObjectType({
  name: 'TeamType',
  description: 'An object representing a single team',
  interfaces: [ NodeInterface ],
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    leader: {
      type: UserType,
      resolve: (team) => {
        console.log(team);
        return generateUser();
      }
    },
    members: {
      type: new GraphQLList(UserType),
      resolve: (team) => {
        console.log(team);
        return Array(...Array(3)).map(() => generateUser());
      }
    },
  }),
  isTypeOf: (item) => item instanceof Team,
});
