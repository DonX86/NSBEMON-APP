import { GraphQLObjectType } from 'graphql';

import { MemberType } from '../member/memberType';
import getDbInstance from '../../database/models/db';
import { MemberQuery } from '../member/memberQuery';
import { TeamQuery } from '../team/teamQuery';

export const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'The root query',
  fields: () => ({
    ...MemberQuery,
    ...TeamQuery,
    viewer: {
      type: MemberType,
      resolve: async (source, args, context) => {
        const db = await getDbInstance();
        const member = await db.Member.findOne({ 
          where: { id: context.__viewer.id }, 
          include: [
            {
              model: db.Profile,
            },
            {
              model: db.Team,
            },
            {
              model: db.Training,
              include: [
                {
                  model: db.Category,
                },
              ]
            },
          ],
          plain: true,
        });
        console.log('member', member);
        return member;
      },
    },
  }),
});
