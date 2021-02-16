import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {connect} from 'react-redux';

import {resetName, updateName} from './action';

import {Header, Footer} from '../../component';

class HomeScreen extends Component {
  state = {
    text: '',
  };

  componentDidMount() {
    console.log({props: this.props});
  }

  componentDidUpdate(prevProps, prevState) {
    console.log({didupdate: prevProps.name});
  }

  forceReset() {
    const {resetName} = this.props;
    resetName();
  }

  onChangeText(t) {
    this.setState({text: t});
  }

  changeName() {
    const {updateName} = this.props;
    updateName(this.state.text);
  }

  render() {
    const {name} = this.props;
    const {text} = this.state;
    return (
      <View>
        <Header />
        <Text>HomeScreen</Text>
        <Text>Your Name : {name}</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(t) => this.onChangeText(t)}
          value={text}
        />
        <Button title="Reset Name" onPress={() => this.forceReset()} />
        <Button title="Set Husen" onPress={() => this.changeName()} />
        <Footer />
      </View>
    );
  }
}

//4. create mapstatetoprops/mapDispatchtopProps

const mapStateToProps = (state) => {
  console.log({homescreen: state});
  return {
    name: state.global.name,
  };
};

const mapDispatchToProps = {
  resetName,
  updateName,
  showAlert: () => {
    console.log('show alert');
  },
};

//5 . connect
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
