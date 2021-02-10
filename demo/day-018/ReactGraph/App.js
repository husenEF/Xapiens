import React from 'react';
import {View, Text} from 'react-native';
//1. import dan inisialisasi
import {ApolloClient, InMemoryCache} from '@apollo/client';
import {gql} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://192.168.0.142:8070/v1/graphql',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query MyQuery {
        todo {
          id
          idUser
          status
        }
      }
    `,
  })
  .then((result) => console.log(result));
const App = () => {
  return (
    <View>
      <Text>Main App</Text>
    </View>
  );
};

export default App;
