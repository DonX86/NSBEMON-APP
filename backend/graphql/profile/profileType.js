import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
} from 'graphql';

import { generateCategory } from '../dataGenerators';
import { CategoryType } from '../category/categoryType';

export const ProfileType = new GraphQLObjectType({
  name: 'ProfileType',
  description: "An object representing a user's profile",
  fields: () => ({
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    categories: {
      type: new GraphQLList(CategoryType),
      resolve: (profile) => {
        console.log(profile);
        return Array(...Array(4)).map(() => generateCategory());
      },
    },
  }),
});
