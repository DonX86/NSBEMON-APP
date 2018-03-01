import { graphqlLambda } from 'apollo-server-lambda';
import middy from 'middy';
import { parseMultipart } from '../middleware/parseMultipart';

import { RootSchema } from '../../../graphql/data/root/rootSchema';

const graphqlHandler = graphqlLambda({ schema: RootSchema });

export const handler = middy(graphqlHandler)
  .use(parseMultipart());