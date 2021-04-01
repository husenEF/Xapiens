import React from 'react';
import {Text, View} from 'react-native';
import {ApolloProvider, gql, useQuery} from '@apollo/client';
import client from './src/service';
import {Form, List} from './src/component';

// const client = new ApolloClient({
//   uri: 'http://192.168.1.27:8080/v1/graphql',
//   cache: new InMemoryCache(),
// });

const DETAIL_USER = gql`
  query($id: Int!) {
    users(where: {id: {_eq: $id}}) {
      id
      name
    }
  }
`;
const App = () => {
  const {loading, data, error, refetch} = useQuery(DETAIL_USER, {
    variables: {id: 12},
  });
  console.log({loading, data, error});
  return (
    <View style={{flex: 1, padding: 10}}>
      <Text>Todo Graph</Text>
      {/* <Form />
      <List /> */}
    </View>
  );
};

const Main = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default Main;
