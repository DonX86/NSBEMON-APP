const { graphqlLambda } = require('apollo-server-lambda');
// const middy = require('middy');
// const { parseMultipart } = require('../middleware/parseMultipart');

const { RootSchema } = require('../../../graphql/root/rootSchema');

const graphqlHandler = (event, context, callback) => {

  const callbackFilter = (error, output) => {
    output.headers['Access-Control-Allow-Origin'] = '*';
    callback(error, output);
  };

  const newHandler = graphqlLambda((event, context) => {
    
    return { 
      schema: RootSchema,
      context: {
        context,
        __viewerEmail: event.requestContext.authorizer.email,
      }
    };
  });

  return newHandler(event, context, callbackFilter);
};

module.exports.handler = graphqlHandler;
  // middy(graphqlHandler)
  // .use(parseMultipart());