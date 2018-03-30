import {
  GraphQLNonNull,
} from 'graphql';
import MemberOperations from './memberOperations';
import { MemberType } from './memberType';
import { CreateMemberInput, AssociateMemberTeamInput } from './mutationInput';

const memberOperations = new MemberOperations();

export const MemberMutation = {
  memberCreate: {
    type: MemberType,
    args: {
      input: { 
        type: new  GraphQLNonNull(CreateMemberInput),
      }
    },
    resolve: (source, args) => {
      return memberOperations.memberCreate(args.input);
    },
  },
  memberAddToTeam: {
    type: MemberType,
    args: {
      input: {
        type: new GraphQLNonNull(AssociateMemberTeamInput),
      }
    },
    resolve: (source, args, context) => {
      return memberOperations.memberAddToTeam(args.input, context);
    }
  }
};
