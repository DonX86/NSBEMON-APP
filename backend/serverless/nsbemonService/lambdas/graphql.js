import { graphqlLambda } from 'apollo-server-lambda';
import middy from 'middy';
import { parseMultipart } from '../middleware/parseMultipart';

import { RootSchema } from '../../../graphql/root/rootSchema';

export const graphqlHandler = (event, context, callback) => {

  const callbackFilter = (error, output) => {
    output.headers['Access-Control-Allow-Origin'] = '*';
    callback(error, output);
  };

  const newHandler = graphqlLambda((event, context) => {
    
    return { 
      schema: RootSchema,
      context: {
        context,
        __viewer: JSON.parse(event.requestContext.authorizer.user),
      }
    };
  });

  return newHandler(event, context, callbackFilter);
};

export const handler = middy(graphqlHandler)
  .use(parseMultipart());