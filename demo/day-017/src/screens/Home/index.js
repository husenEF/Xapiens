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
        title="Go to Cairns"
        onPress={() => navigation.navigate('Weather', {cityId: 2172797})}
      />
    </View>
  );
};

export default Home;
