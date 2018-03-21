import { ApolloClient } from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import { from, ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Cookies from 'js-cookie';

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      'Authorization': Cookies.get('nsbemon_auth_token')
    }
  });
  return forward(operation);
});


const client = new ApolloClient({
  link: from([
    authMiddleware,
    createUploadLink({ uri: 'http://localhost:4000/graphql' })
  ]),
  cache: new InMemoryCache()
});

export { client };
