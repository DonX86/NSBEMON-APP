import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

export const CreateTeamInput = new GraphQLInputObjectType({
  name: 'CreateTeamInput',
  description: 'The input type for creating a team.',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});
