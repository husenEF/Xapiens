import React from 'react';
import {Text, View} from 'react-native';
import {ApolloProvider} from '@apollo/client';
import client from './src/service';
import {Form, List} from './src/component';

// const client = new ApolloClient({
//   uri: 'http://192.168.1.27:8080/v1/graphql',
//   cache: new InMemoryCache(),
// });

const App = () => {
  return (
    <View style={{flex: 1, padding: 10}}>
      <Text>Todo Graph</Text>
      <Form />
      <List />
    </View>
  );
};

const Main = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default Main;
