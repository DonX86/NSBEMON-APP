import jwt from 'jsonwebtoken';

const buildIAMPolicy = (userId, resourceArn, context) => {
  const policy = {
    principalId: userId,
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
}

export const handler = (event, context, callback) => {

  // Get the token provided in the Authorization header
  const token = event.authorizationToken;

  // Verify the token is sound
  jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    if (error) {
      // Return a 401
      callback('Unauthorized');
    } else {
      const authorizedContext = {
        user: JSON.stringify(decoded.user),
      };
      const policyDoc = buildIAMPolicy(decoded.user.id, event.methodArn, authorizedContext);
      // Authorize the user to use the protected lambda
      callback(null, policyDoc);
    }
  });
};
