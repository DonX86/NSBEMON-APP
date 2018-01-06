'use strict';

module.exports.handler = (event, context, callback) => {

  // The authenticated user
  const user = JSON.parse(event.requestContext.authorizer.user);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hitting the graphql lambda',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
