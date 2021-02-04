import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {FeedScreen, ProfileScreen} from '../index';

const Tab = createBottomTabNavigator();

const Logo = () => {
  //
  return (
    <Image
      style={{width: 20, height: 20}}
      source={{uri: 'https://picsum.photos/200/200'}}
    />
  );
};

const Home = ({navigation}) => {
  console.log({navigation});
  return (
    <View style={{flex: 1}}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate('Detail', {id: 100, title: 'Halaman Detail'});
        }}
        title="TO Detail"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: (props) => <Logo {...props} />,
        })}>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default Home;
