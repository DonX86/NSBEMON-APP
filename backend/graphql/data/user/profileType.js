import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql'

export const ProfileType = new GraphQLObjectType({
  name: 'ProfileType',
  description: 'An object representing a user\'s profile',
  fields: () => ({
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    points: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  }),
});
