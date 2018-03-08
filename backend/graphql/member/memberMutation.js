import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import MemberOperations from './memberOperations';
import { MemberType } from './memberType';

const memberOperations = new MemberOperations();

export const UserMutation = new GraphQLObjectType({
  name: 'UserQuery',
  fields: () => ({
    createUser: {
      type: MemberType,
      args: {
        email: new GraphQLNonNull(GraphQLString),
        firstName: new GraphQLNonNull(GraphQLString),
        lastName: new GraphQLNonNull(GraphQLString),
        isLeader: new GraphQLNonNull(GraphQLBoolean),
      },
      resolve: (source, args, context) => {
        return memberOperations.createUser(args.input, context);
      }
    }
  })
});
