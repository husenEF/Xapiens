import React from 'react';
import {View, Text, Button} from 'react-native';

import {CounterConsumer} from '../../context/Counter';

const Actions = () => {
  return (
    <View style={{padding: 5, borderColor: 'blue', borderWidth: 1}}>
      <Text>Action btn</Text>
      <CounterConsumer>
        {(value) => {
          const {increment, callUser} = value;
          return (
            <View>
              <Button title="inc" onPress={increment} />
              <Button title="get User" onPress={() => callUser()} />
            </View>
          );
        }}
      </CounterConsumer>
    </View>
  );
};

export default Actions;
