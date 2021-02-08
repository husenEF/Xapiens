import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';

import CounterContext from '../../context/Counter';
const MyList = () => {
  const {users, callUser} = useContext(CounterContext);
  console.log({users});
  return (
    <View style={{padding: 5, borderColor: 'blue', borderWidth: 1}}>
      <Text>List </Text>
      <Button title="Get User" color="red" onPress={() => callUser()} />
    </View>
  );
};

export default MyList;
