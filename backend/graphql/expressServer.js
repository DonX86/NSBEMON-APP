const express = require('express');
const graphqlHTTP = require('express-graphql');
const { RootSchema } = require('./root/rootSchema');

const app = express();

console.log('Starting GraphQL Server...');

// Allow CORS
app.use('/graphql', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  );
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(
  '/graphql',
  graphqlHTTP(() => {
    return { 
      schema: RootSchema, 
      graphiql: true,
      context: {
        __viewerEmail: 'a@gmail.com',
      }
    };
  })
);

app.listen(4001);

console.log('Running GraphQL server @ localhost:4001/graphql');
