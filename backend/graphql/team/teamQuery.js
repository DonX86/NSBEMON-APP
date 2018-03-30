import {
  GraphQLList
} from 'graphql';

import getDbInstance from '../../database/models/db';
import { TeamType } from './teamType';

export const TeamQuery = {
  teamGetAll: {
    type: new GraphQLList(TeamType),
    resolve: async () => {
      const db = await getDbInstance();
      const val = await db.Team.findAll({ 
        include: [
          {
            model: db.Member,
            include: [
              {
                model: db.Training,
                include: [
                  {
                    model: db.Category
                  }
                ]
              },
            ],
          },
        ],  
      });
      
      return val;
    },
  },
};
