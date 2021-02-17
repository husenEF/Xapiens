import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/fitures';

import {HomeScreen} from './src/screens';
const App = () => {
  return (
    <Provider store={store}>
      <Text>Main App</Text>
      <HomeScreen />
    </Provider>
  );
};

export default App;
