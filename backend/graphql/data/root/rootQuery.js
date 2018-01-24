import {
  GraphQLObjectType,
} from 'graphql';

import { UserType } from '../user/userType';
import { generateUser, generateTeam } from '../dataGenerators';

const returnViewer = async () => {
  const delay = await new Promise(resolve => {
    setTimeout(() => resolve(), 500);
  });
  return generateUser();
};


export const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'The root query',
  fields: {
    viewer: {
      type: UserType,
      resolve(source, args, context) {
        return returnViewer();
      },
    },
  },
});
