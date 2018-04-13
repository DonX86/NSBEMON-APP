const { GraphQLNonNull } = require('graphql');
const { CategoryType } = require('./categoryType');

const { CategoryOperations } = require('./categoryOperations');
const { CreateCategoryInput } = require('./input');

const categoryOperations = new CategoryOperations();

module.exports.CategoryMutation = {
  createCategory: {
    type: CategoryType,
    args: {
      input: {
        type: new GraphQLNonNull(CreateCategoryInput),
      },
    },
    resolve: (source, args, context) => {
      return categoryOperations.createCategory(args.input, context);
    },
  },
};
