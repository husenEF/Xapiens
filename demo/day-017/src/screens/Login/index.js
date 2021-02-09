import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';

import MasterAuth from '../../context/Auth.context';
const Login = () => {
  const {logIn} = useContext(MasterAuth);

  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Login"
        onPress={() =>
          logIn({name: 'Refactory', id: 1524, email: 'admin@refactory.id'})
        }
      />
    </View>
  );
};

export default Login;
