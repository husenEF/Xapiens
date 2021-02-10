import React from 'react';
import {View, Text, ActivityIndicator, FlatList, Button} from 'react-native';
//1. import dan inisialisasi
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
  useMutation,
} from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://192.168.0.142:8070/v1/graphql',
  cache: new InMemoryCache(),
});

const TODO_QUERY = gql`
  query MyQuery {
    todo {
      id
      idUser
      status
      title
    }
  }
`;

const ADD_TODO = gql`
  mutation($title: String!, $status: Boolean, $userId: Int) {
    insert_todo(objects: {idUser: $userId, status: $status, title: $title}) {
      returning {
        idUser
        status
        title
      }
    }
  }
`;

const Display = () => {
  const query = useQuery(TODO_QUERY);
  const [insertTodo, responseInsert] = useMutation(ADD_TODO);
  // console.log({query});
  const {data, loading, error} = query;
  console.log({da: data});

  const addTodo = () => {
    insertTodo({
      variables: {
        title: 'Solat Duhur',
        status: false,
        userId: 1,
      },
    });
  };

  console.log({responseInsert});
  return (
    <View>
      <Text>Display component</Text>
      {loading && (
        <View style={{padding: 10, alignContent: 'center'}}>
          <ActivityIndicator color="red" />
        </View>
      )}
      {!loading && (
        <FlatList
          data={data.todo}
          renderItem={({item, index}) => {
            console.log({item, index});
            return <Text key={index}>{item.title}</Text>;
          }}
        />
      )}
      <Button onPress={addTodo} title="add" />
    </View>
  );
};

const App = () => {
  return (
    <View>
      <Text>Main App</Text>
      <Display />
    </View>
  );
};

const Main = (props) => (
  <ApolloProvider client={client}>
    <App {...props} />
  </ApolloProvider>
);

export default Main;
