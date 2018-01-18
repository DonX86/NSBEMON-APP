import {
  GraphQLObjectType,
} from 'graphql';

import { UserType } from '../user/userType';
import { generateUser, generateTeam } from '../dataGenerators';

export const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'The root query',
  fields: {
    viewer: {
      type: UserType,
      resolve(source, args, context) {
        return generateUser();
      },
    },
  },
});
