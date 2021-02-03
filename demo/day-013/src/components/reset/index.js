import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

const Reset = () => {
  const [name, setName] = useState('Refactory');
  const inputRef = useRef();
  useEffect(() => {
    console.log('input ref', inputRef.current);
  });
  const resetText = () => {
    inputRef.current.clear();
  };
  return (
    <View>
      <Text>======= RESET =======</Text>
      <Text>Input</Text>
      <TextInput
        value={name}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => setName(text)}
        ref={inputRef}
      />
      <Button
        style={{flex: 1}}
        onPress={resetText}
        title="reset"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default Reset;
