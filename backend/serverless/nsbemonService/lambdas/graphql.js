import { graphqlLambda } from 'apollo-server-lambda';

import { RootSchema } from '../../../graphql/data/root/rootSchema';

export const handler = graphqlLambda({ schema: RootSchema });
