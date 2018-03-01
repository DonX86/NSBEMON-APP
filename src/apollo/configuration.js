import { ApolloClient } from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import { from } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: from([
    createUploadLink({ uri: 'http://localhost:4000/graphql' })
  ]),
  cache: new InMemoryCache()
});

export { client };
