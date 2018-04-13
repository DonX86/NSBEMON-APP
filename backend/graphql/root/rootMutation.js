const {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');
const { GraphQLUpload } = require('apollo-upload-server');
const { MemberMutation } = require('../member/memberMutation');
const { CategoryMutation } = require('../category/categoryMutation');

module.exports.RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'The root mutation',
  fields: () => ({
    ...MemberMutation,
    ...CategoryMutation,
    submitTraining: {
      type: GraphQLBoolean,
      args: {
        title: {
          type: new GraphQLNonNull(GraphQLString),
        },
        description: {
          type: new GraphQLNonNull(GraphQLString),
        },
        category: {
          type: new GraphQLNonNull(GraphQLString),
        },
        imageFile: {
          type: GraphQLUpload,
        },
      },
      resolve(source, args, context) {
        return true;
      },
    },
  }),
});
