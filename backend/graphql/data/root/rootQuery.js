import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLList
} from 'graphql';

import { NodeInterface } from '../../interfaces/nodeInterface';
import { TeamType } from '../team/teamType';
import { generateUser, generateTeam } from '../dataGenerators';

export const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'The root query',
  fields: {
    viewer: {
      type: NodeInterface,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        }
      },
      resolve(source, args, context) {
        return generateUser(false, generateTeam());
      },
    },
    teams: {
      type: new GraphQLList(TeamType),
      resolve(source, args, context) {
        return Array(...Array(3)).map(() => generateTeam());
      }
    }
  },
});
