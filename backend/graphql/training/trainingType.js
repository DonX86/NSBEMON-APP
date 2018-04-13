const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
} = require('graphql');

module.exports.TrainingType = new GraphQLObjectType({
  name: 'TrainingType',
  fields: () => {
    const { CategoryType } = require('../category/categoryType');
    return {
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
      },
      created: {
        type: GraphQLString,
      },
      updated: {
        type: GraphQLString,
      },
    };
  },
});
