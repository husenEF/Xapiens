import React, {useState, useEffect} from 'react';

import {Image, Button, View, ActivityIndicator, Text} from 'react-native';
//1.import navitaion libr
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// //2 siapkan screen
import {
  HomeScreen,
  DetailScreen,
  RegisterScreen,
  LoginScreen,
} from './src/screens';

// 3 inisialisasi navigation

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//custom component logo
const Logo = () => {
  //
  return (
    <Image
      style={{width: 50, height: 50}}
      source={{uri: 'https://picsum.photos/200/200'}}
    />
  );
};

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(true);

  useEffect(() => {
    //check login
    setTimeout(() => {
      setIsLogin(true);
      setLoadingScreen(false);
    }, 1500);
    console.log('use eff');
  }, []);

  const removeLogout = () => {};

  if (loadingScreen) return <ActivityIndicator color="red" />;

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {isLogin ? (
          <>
            <Drawer.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'My Home',
                headerStyle: {
                  backgroundColor: '#f4511e',
                  textAlign: 'center',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerTitle: (props) => <Logo {...props} />,
                headerRight: () => (
                  <Button
                    onPress={() => removeLogout()}
                    title="Logout"
                    color="blue"
                  />
                ),
              }}
            />
            <Drawer.Screen
              name="Detail"
              component={DetailScreen}
              options={{
                headerRight: () => (
                  <Button
                    onPress={() => removeLogout()}
                    title="Logout"
                    color="blue"
                  />
                ),
              }}
              // options={({route}) => ({title: route.params.title})}
            />
          </>
        ) : (
          <>
            <Drawer.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
