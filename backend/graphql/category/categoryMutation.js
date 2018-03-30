import { GraphQLNonNull } from 'graphql';
import { CategoryType } from "./categoryType";

import CategoryOperations from './categoryOperations';
import { CreateCategoryInput } from './mutationInput';

const categoryOperations = new CategoryOperations();

export const CategoryMutation = {
  createCategory: {
    type: CategoryType,
    args: {
      input: {
        type: new GraphQLNonNull(CreateCategoryInput),
      }
    },
    resolve: (source, args, context) => {
      return categoryOperations.createCategory(args.input, context);
    }
  }
};