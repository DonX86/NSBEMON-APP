import express from 'express';
import graphqlHTTP from 'express-graphql';
import { RootSchema } from '../data/root/rootSchema';

const app = express();

console.log('Starting GraphQL Server...');

app.use('/graphql', graphqlHTTP(() => {
  return { schema: RootSchema, graphiql: true, };
}));

app.listen(3000);

console.log('Running GraphQL server...');
