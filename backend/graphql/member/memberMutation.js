import MemberOperations from './memberOperations';
import { MemberType } from './memberType';
import { CreateMemberInput } from './mutationInput';

const memberOperations = new MemberOperations();

export const MemberMutation = {
  memberCreate: {
    type: MemberType,
    args: {
      input: { type: CreateMemberInput }
    },
    resolve: (source, args) => {
      return memberOperations.memberCreate(args.input);
    },
  },
};
