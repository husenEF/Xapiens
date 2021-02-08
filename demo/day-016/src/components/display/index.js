import React from 'react';
import {View, Text} from 'react-native';

import {CounterConsumer} from '../../context/Counter';

const Display = () => {
  return (
    <View style={{padding: 5, borderColor: 'blue', borderWidth: 1}}>
      <Text>Display component</Text>
      <CounterConsumer>
        {(value) => {
          const {data, users} = value;
          return (
            <View>
              <Text>untuk data consumer - data : {data}</Text>
              <Text>{JSON.stringify(users)}</Text>
            </View>
          );
        }}
      </CounterConsumer>
    </View>
  );
};

export default Display;
