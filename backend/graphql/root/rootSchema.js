import { GraphQLSchema } from 'graphql';

import { RootQuery } from './rootQuery';
import { RootMutation } from './rootMutation';
import { MemberType } from '../member/memberType';
import { TeamType } from '../team/teamType';

export const RootSchema = new GraphQLSchema({
  types: [MemberType, TeamType],
  query: RootQuery,
  mutation: RootMutation,
});
