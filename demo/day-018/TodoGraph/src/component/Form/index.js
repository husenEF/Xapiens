import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';

import {useMutation} from '@apollo/client';
// import gql from 'graphql-tag';

import {INSERT_USER} from '../../service/todo';

const Form = () => {
  const [text, setText] = useState('');
  const [insertTodo, {loading, data}] = useMutation(INSERT_USER);
  console.log({loading, data});
  return (
    <View
      style={{
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        paddingBottom: 10,
      }}>
      <Text>Nama Kegiatan</Text>
      <TextInput
        style={{
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 5,
          padding: 5,
        }}
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <TouchableOpacity
        onPress={() => {
          insertTodo({
            variables: {
              name: text,
              status: false,
            },
          });
          setText('');
        }}>
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
