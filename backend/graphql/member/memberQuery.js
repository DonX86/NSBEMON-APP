import MemberOperations from './memberOperations';
import { MemberType } from './memberType';
import { GetMemberByUsernamePasswordInput } from './mutationInput';

const memberOperations = new MemberOperations();

export const MemberQuery = {
  memberGetByUsernamePassword: {
    type: MemberType,
    args: {
      input: { type: GetMemberByUsernamePasswordInput },
    },
    resolve: (source, args) => {
      return memberOperations.memberGetByUsernamePassword(args.input);
    },
  },
};
