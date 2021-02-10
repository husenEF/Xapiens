import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://192.168.1.27:8080/v1/graphql',
  cache: new InMemoryCache(),
});

export default client;
