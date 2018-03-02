import { GraphQLObjectType, GraphQLList } from 'graphql';

import { UserType } from '../user/userType';
import { TeamType } from '../team/teamType';
import { generateUser } from '../dataGenerators';
import getDbInstance from '../../database/models/db';

export const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'The root query',
  fields: () => ({
    viewer: {
      type: UserType,
      resolve: () => {
        return generateUser();
      },
    },
    teams: {
      type: new GraphQLList(TeamType),
      resolve: async () => {
        const db = await getDbInstance();
        return await db.Team.findAll({ raw: true });
      },
    },
  }),
});
