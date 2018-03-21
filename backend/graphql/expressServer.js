import express from 'express';
import graphqlHTTP from 'express-graphql';
import { RootSchema } from './root/rootSchema';

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
        __viewer: JSON.parse(process.env.NSBEMON_VIEWER),
      }
    };
  })
);

app.listen(4001);

console.log('Running GraphQL server @ localhost:4001/graphql');
