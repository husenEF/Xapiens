import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://192.168.0.115:8090/v1/graphql',
  cache: new InMemoryCache(),
});

export default client;
