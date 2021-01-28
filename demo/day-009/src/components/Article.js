import React from 'react';
import {View, Text} from 'react-native';

import Hello from './Hello';

const ArticleWrapper = (props) => {
  return (
    <View>
      <Hello name={props.title} umur="15" />
      {props.children}
    </View>
  );
};

export default ArticleWrapper;
