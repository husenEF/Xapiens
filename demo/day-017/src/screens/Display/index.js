import React, {createContext, useContext} from 'react';
import {Text, View} from 'react-native';
import {CounterConsumer} from '../../context/Counter.context';

const Display = () => {
  return (
    <View>
      <Text>Display Component</Text>
      <CounterConsumer>
        {(counter) => {
          console.log({counter});
          return (
            <>
              <Text>Title is {counter.title || 'no title'}</Text>
              <Text>Counter: {counter.data}</Text>
            </>
          );
        }}
      </CounterConsumer>
    </View>
  );
};

export default Display;
