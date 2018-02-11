import jwt from 'jsonwebtoken';

const JWT_EXPIRATION_TIME = '5m';

export const handler = (event, context, callback) => {
  // Extract the username and password
  const { username, password } = JSON.parse(event.body);

  // Authenticate the user in the database with username and password
  const user = { name: 'TEST' };

  jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: JWT_EXPIRATION_TIME }, (error, token) => {

    let response = undefined;

    if (error) {
      response = {
        statusCode: 401,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error }),
      };
    } else {
      response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ token }),
      };
    }
    callback(null, response);
  });
};
