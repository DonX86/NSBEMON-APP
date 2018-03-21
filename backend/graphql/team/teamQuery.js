import {
  GraphQLList
} from 'graphql';

import getDbInstance from '../../database/models/db';
import { TeamType } from './teamType';

export const TeamQuery = {
  getAllTeam: {
    type: new GraphQLList(TeamType),
    resolve: async () => {
      const db = await getDbInstance();
      return db.Team.findAll({ raw: true });
    },
  },
};
