import React from 'react';
import {Text, View, Button} from 'react-native';

const LoginPage = ({loginAction}) => {
  return (
    <View>
      <Text>Login Page</Text>
      <Button
        onPress={loginAction}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default LoginPage;
