import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql';

import { CategoryType } from '../category/categoryType';

export const TrainingType = new GraphQLObjectType({
  name: 'TrainingType',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    title: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    imageURL: {
      type: GraphQLString,
    },
    approved: {
      type: GraphQLBoolean,
    },
    category: {
      type: CategoryType,
      resolve: (source) => source.Training.Category,
    },
    createdAt: {
      type: GraphQLString,
    },
    updatedAt: {
      type: GraphQLString,
    },
  }),
});
