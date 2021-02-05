import React, {useState, useEffect, Component} from 'react';

import {
  Image,
  Button,
  View,
  ActivityIndicator,
  Text,
  Slider,
} from 'react-native';
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
  LandingScreen,
} from './src/screens';

// 3 inisialisasi navigation

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//custom component logo
const Logo = () => {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={{uri: 'https://picsum.photos/200/200'}}
    />
  );
};

// const App = () => {
//   const [isLogin, setIsLogin] = useState(false);
//   const [loadingScreen, setLoadingScreen] = useState(true);

//   useEffect(() => {
//     //check login
//     setTimeout(() => {
//       setIsLogin(true);
//       setLoadingScreen(false);
//     }, 1500);
//     console.log('use eff');
//   }, []);

//   const removeLogout = () => {};

//   if (loadingScreen) return <ActivityIndicator color="red" />;

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {isLogin ? (
//           <>
//             <Stack.Screen
//               name="Home"
//               component={HomeScreen}
//               options={{
//                 title: 'My Home',
//                 headerStyle: {
//                   backgroundColor: '#f4511e',
//                   textAlign: 'center',
//                 },
//                 headerTintColor: '#fff',
//                 headerTitleStyle: {
//                   fontWeight: 'bold',
//                 },
//                 headerTitle: (props) => <Logo {...props} />,
//                 headerRight: () => (
//                   <Button
//                     onPress={() => removeLogout()}
//                     title="Logout"
//                     color="blue"
//                   />
//                 ),
//               }}
//             />
//             <Stack.Screen
//               name="Detail"
//               component={DetailScreen}
//               options={{
//                 headerRight: () => (
//                   <Button
//                     onPress={() => removeLogout()}
//                     title="Logout"
//                     color="blue"
//                   />
//                 ),
//               }}
//               // options={({route}) => ({title: route.params.title})}
//             />
//           </>
//         ) : (
//           <>
//             <Stack.Screen name="Register" component={RegisterScreen} />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

class App extends Component {
  state = {
    isLogin: false,
  };

  render() {
    const {isLogin} = this.state;
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {isLogin ? (
            <>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  headerRight: () => (
                    <Button
                      onPress={() => this.setState({isLogin: false})}
                      title="Logout"
                      color="red"
                    />
                  ),
                }}
              />
              <Stack.Screen name="Detail" component={DetailScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="LandingPage" component={LandingScreen} />
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  headerRight: () => (
                    <Button
                      onPress={() => this.setState({isLogin: true})}
                      title="Set Login"
                      color="red"
                    />
                  ),
                }}
              />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
