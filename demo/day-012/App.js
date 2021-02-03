import React, {Component} from 'react';
import {View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {ProfilePage, LandingPage, LoginPage} from './src/screens';

class App extends Component {
  state = {
    isLogin: false,
    checkingLogin: true,
  };

  componentDidMount() {
    // this.preCheck();
    this.checkLogin();
  }


  checkLogin = async () => {
    try {
      //local storage
      //get data from BE
      const login = await AsyncStorage.getItem('login');
      console.log({login});
      if (login) {
        this.setState({isLogin: true});
      } else {
        this.setState({isLogin: false});
      }
      // this.setState({isLogin: true});
    } catch (error) {
    } finally {
      setTimeout(() => {
        this.setState({checkingLogin: false});
        // this.checkLogin();
      }, 3000);
    }
  };

  actionLogin = async () => {
    try {
      await AsyncStorage.setItem('login', '1');
      this.setState({isLogin: true});
    } catch (error) {}

    // try {
    // } catch (error) {}
  };
  render() {
    const {isLogin, checkingLogin} = this.state;

    return (
      <View>
        {checkingLogin ? (
          <LandingPage />
        ) : (
          <>
            {!isLogin ? (
              <LoginPage loginAction={this.actionLogin} />
            ) : (
              <>
                <ProfilePage />
              </>
            )}
          </>
        )}
      </View>
    );
  }
}

export default App;
