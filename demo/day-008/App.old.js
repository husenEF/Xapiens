import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

class CounterApp extends Component {
  state = {
    counter: 0
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 })
  }

  decrement() {
    if (this.state.counter > 0)
      this.setState({ counter: this.state.counter - 1 })
  }

  render() {
    console.log({ count: this.state.counter })
    return <View style={{ flex: 1 }}>
      <Text style={{ textAlign: 'center', fontSize: 20, padding: 10 }}>Contoh Counter App</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Button
          onPress={() => this.decrement()}
          title="-"
          color="#841515"
          accessibilityLabel="Decrement"
        />
        <Text style={{ padding: 10, width: 100, textAlign: 'center' }}>{this.state.counter}</Text>
        <Button
          onPress={() => this.increment()}
          title="+"
          color="#841584"
          accessibilityLabel="Increment"
        />
      </View>
    </View>
  }
}

export default CounterApp