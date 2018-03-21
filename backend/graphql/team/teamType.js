import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

import { MemberType } from '../member/memberType';
import { generateUser } from '../dataGenerators';

export const TeamType = new GraphQLObjectType({
  name: 'TeamType',
  description: 'An object representing a single team',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    leader: {
      type: MemberType,
      resolve: (team) => {
        console.log(team);
        return generateUser();
      },
    },
    members: {
      type: new GraphQLList(MemberType),
      resolve: (team) => {
        console.log(team);
        return Array(...Array(3)).map(() => generateUser());
      },
    },
  }),
});
