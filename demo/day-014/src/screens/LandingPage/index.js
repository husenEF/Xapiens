import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {exp} from 'react-native/Libraries/Animated/src/Easing';

class LandingScreen extends Component {
  render() {
    console.log({props: this.props});
    const {navigation} = this.props;
    return (
      <View>
        <Text>Landing Page</Text>
        <Button onPress={() => navigation.navigate('Login')} title="Login" />
      </View>
    );
  }
}

export default LandingScreen;
