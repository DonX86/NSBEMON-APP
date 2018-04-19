const { GraphQLList } = require('graphql');
const { CategoryOperations } = require('./categoryOperations');
const { CategoryType } = require('./categoryType');

const categoryOperations = new CategoryOperations();

module.exports.CategoryQuery = {
  categoryGetAll: {
    type: new GraphQLList(CategoryType),
    resolve: (source, args, context) => {
      return categoryOperations.categoryGetAll();
    },
  },
};
