import { GraphQLObjectType, GraphQLList } from 'graphql';

import { UserType } from '../user/userType';
import { TeamType } from '../team/teamType';
import { generateUser, generateTeam } from '../dataGenerators';
import { Team } from '../../../database/models/db';

export const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'The root query',
  fields: () => ({
    viewer: {
      type: UserType,
      resolve: (source, args, context) => {
        return generateUser();
      }
    },
    teams: {
      type: new GraphQLList(TeamType),
      resolve: (source, args, context) => {
        return new Promise((resolve, reject) => {
          resolve(Team.findAll({ raw: true }));
        });
      }
    }
  })
});
