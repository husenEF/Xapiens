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
    </View>
  );
};

export default Home;
