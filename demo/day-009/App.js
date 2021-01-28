import React from 'react';
import {Text, View} from 'react-native';

import Hello from './src/components/Hello';
import ArticleWrapper from './src/components/Article';

const App = () => {
  return (
    <View>
      <ArticleWrapper title="Halo Dunia">
        <Text>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum
        </Text>
        <View style={{borderBottomColor: 'red', borderBottomWidth: 1}} />
        <Text>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum
        </Text>
      </ArticleWrapper>
    </View>
  );
};

export default App;
