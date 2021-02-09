import React from 'react';
import {Button, Text, View} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="to Display"
        onPress={() => navigation.navigate('Display')}
      />
      <Button
        title="Go to Products"
        onPress={() => navigation.navigate('Products')}
      />
    </View>
  );
};

export default Home;
