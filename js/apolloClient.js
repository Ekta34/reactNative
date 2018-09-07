import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

const client = new ApolloClient({
    link: new HttpLink({ uri: 'https://young-harbor-14992.herokuapp.com' }),
    cache: new InMemoryCache()
  });

export default client;