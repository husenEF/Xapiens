import React, {Component} from 'react';
import {Text, View, Button, FlatList, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class ProfilePage extends Component {
  state = {
    todo: '',
    todoList: [],
    loading: false,
  };

  addTodo = async () => {
    const {todoList} = this.state;
    try {
      const d = new Date();
      todoList.push('todo:  ' + d.toLocaleDateString());
      console.log({todoList});
      const stringTodo = JSON.stringify(todoList);
      await AsyncStorage.setItem('todoList', stringTodo);
    } catch (error) {
    } finally {
      this.getTodo();
    }
  };

  getTodo = async () => {
    this.setState({loading: true});
    try {
      const stringValue = await AsyncStorage.getItem('todoList');
      const jsonValue = JSON.parse(stringValue);
      this.setState({todoList: jsonValue});
    } catch (error) {
    } finally {
      this.setState({loading: false});
    }
  };
  render() {
    const {todoList, loading} = this.state;
    console.log({render: todoList});
    return (
      <View>
        <Text>Profile Page</Text>
        <Button
          onPress={this.addTodo}
          title="Add Todo"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        {loading && <ActivityIndicator color="blue" />}
        {/* <FlatList data={} /> */}
      </View>
    );
  }
}
export default ProfilePage;
