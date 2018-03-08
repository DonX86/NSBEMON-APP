import jwt from 'jsonwebtoken';
import forge from 'node-forge';
import getDbInstance from '../../../database/models/db';

const JWT_EXPIRATION_TIME = '5m';

export const handler = async (event, context) => {
  // Extract the username and password
  const { username, password } = JSON.parse(event.body);

  // Authenticate the user in the database with username and password
  const db = await getDbInstance();
  const encryptedPass = forge.md.sha256.create();
  encryptedPass.update(password);
  const user = await db.Member.findOne({ where: { username, encryptedPassword: encryptedPass.digest().toHex() }, raw: true });

  let response;
  if (user) {
    jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: JWT_EXPIRATION_TIME }, (error, token) => {

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
    });
  } else {
    response = { 
      statusCode: 401, 
      headers: { 'Access-Control-Allow-Origin': '*' }, 
      body: JSON.stringify({ error: 'No user found.' }) 
    };
  }
  return response;
};
