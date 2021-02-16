import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {setLogin} from '../../features/auth/actions';

const LoginScreen = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Button title="Login" onPress={() => dispatch(setLogin)} />
    </View>
  );
};

export default LoginScreen;
