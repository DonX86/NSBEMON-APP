const dynamoose = require('dynamoose');

dynamoose.AWS.config.update({
  accessKeyId: process.env.NSBEMON_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NSBEMON_AWS_SECRET_ACCESS_KEY,
  region: process.env.NSBEMON_AWS_REGION,
});

dynamoose.setDefaults({
  create: true,
});

module.exports.db = dynamoose;
