import { GraphQLObjectType, GraphQLList } from 'graphql';

import { MemberType } from '../member/memberType';
import { TeamType } from '../team/teamType';
import { generateUser } from '../dataGenerators';
import getDbInstance from '../../database/models/db';

export const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'The root query',
  fields: () => ({
    viewer: {
      type: MemberType,
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
