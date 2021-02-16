import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Home from './Home';
import LoginScreen from './Login';

const MainScreen = () => {
  const auth = useSelector((state) => state.auth);

  console.log({main: auth});
  return <View>{auth.isLogin ? <Home /> : <LoginScreen />}</View>;
};

export default MainScreen;
