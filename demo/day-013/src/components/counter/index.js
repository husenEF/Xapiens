import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';

const Counter = () => {
  const [count, setCounter] = useState(0);

  const a = async () => {
    console.log('a is runing');
    setTimeout(() => {
      setCounter(50);
    }, 5000);
  };
  useEffect(() => {
    console.log('useEfect', count);
    if (count === 5) a();
  }, [count]);

  useEffect(() => console.log('mount'), []);
  useEffect(() => console.log('will update count'), [count]);
  useEffect(() => console.log('will update any'));
  useEffect(() => () => console.log('will update count or unmount'), [count]);
  useEffect(() => () => console.log('unmount'), []);

  const increment = () => {
    setCounter(count + 1);
  };

  const decrement = () => {
    setCounter(count - 1);
  };

  return (
    <View>
      <Text>Number: {count}</Text>
      <View style={{padding: 5, flexDirection: 'row'}}>
        <Button
          style={{flex: 1}}
          onPress={decrement}
          title="-"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={increment}
          title="+"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
};
export default Counter;
