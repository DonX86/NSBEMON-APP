import { GraphQLSchema } from 'graphql';

import { RootQuery } from './rootQuery';
import { RootMutation } from './rootMutation';
import { UserType } from '../user/userType';
import { TeamType } from '../team/teamType';

export const RootSchema = new GraphQLSchema({
  types: [UserType, TeamType],
  query: RootQuery,
  mutation: RootMutation,
});
