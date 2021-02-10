import React, {createContext, useContext} from 'react';
import {Text, View} from 'react-native';
import {CounterConsumer, CounterProvider} from '../../context/Counter.context';

import {FooterScreen} from '../index';

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
      <FooterScreen />
    </View>
  );
};

export default () => (
  <CounterProvider>
    <Display />
  </CounterProvider>
);
