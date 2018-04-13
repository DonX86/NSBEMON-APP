const jwt = require('jsonwebtoken');
const { MemberOperations } = require('../../../graphql/member/memberOperations');

const JWT_EXPIRATION_TIME = '60m';
const memberOperations = new MemberOperations();

module.exports.handler = async (event, context, callback) => {
  // Extract the username and password
  const { email, password } = JSON.parse(event.body);

  // Authenticate the user in the database with username and password
  const user = await memberOperations.memberGetByEmailPassword({ email, password });

  let response;
  if (user) {
    jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: JWT_EXPIRATION_TIME }, (error, token) => {

      if (error) {
        response = {
          statusCode: 401,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ error }),
        };
      } else {
        response = {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        };
      }
      return callback(null, response);
    });
  } else {
    response = { 
      statusCode: 401, 
      headers: { 
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify({ error: 'No user found.' }) 
    };
    return callback(null, response);
  }
};
