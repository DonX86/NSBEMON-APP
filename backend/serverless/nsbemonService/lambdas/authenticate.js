const jwt = require('jsonwebtoken');

const buildIAMPolicy = (userEmail, resourceArn, context) => {
  const policy = {
    principalId: userEmail,
    policyDocument: {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: 'Allow',
          Resource: resourceArn,
        },
      ],
    },
    context,
  };
  return policy;
};

module.exports.handler = (event, context, callback) => {
  // Get the token provided in the Authorization header
  const token = event.authorizationToken;

  // Verify the token is sound
  jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    if (error) {
      // Return a 401
      callback('Unauthorized');
    } else {
      const authorizedContext = {
        email: decoded.email,
      };
      const policyDoc = buildIAMPolicy(
        decoded.email,
        event.methodArn,
        authorizedContext
      );
      // Authorize the user to use the protected lambda
      callback(null, policyDoc);
    }
  });
};
