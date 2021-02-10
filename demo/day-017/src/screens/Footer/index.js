import React, {useContext, useState} from 'react';
import {Text, View, Button} from 'react-native';

import MasterCounter, {CounterProvider} from '../../context/Counter.context';

const Footer = () => {
  const [title, setTitle] = useState('halo title');
  const CounterMaster = useContext(MasterCounter);
  console.log({CounterMaster});
  return (
    <View>
      <Text>Footer Component</Text>
      <Button title="inc" onPress={() => CounterMaster.inc()} />
      <Button
        title="update title from local state"
        onPress={() => CounterMaster.upTitle(title)}
      />
    </View>
  );
};

export default Footer;
