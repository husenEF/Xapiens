import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import {CounterProvider} from './src/context/Counter.context';
import MasterAuth, {AuthProvider} from './src/context/Auth.context';

import {
  DisplayScreen,
  FooterScreen,
  HomeScreen,
  LoginScreen,
} from './src/screens';

const Stack = createStackNavigator();
const App = () => {
  const GlobalAuth = useContext(MasterAuth);
  const {isLogin} = GlobalAuth;

  return (
    //auth context
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Display" component={DisplayScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// export default App;

const MasterApp = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
export default MasterApp;
