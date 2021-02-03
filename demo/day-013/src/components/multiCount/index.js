import React, {useCallback, useState} from 'react';
import {View, Text, Button} from 'react-native';

const Show = React.memo((props) => {
  const {label, val} = props;
  console.log(`${label} inside Show render`);
  return (
    <View>
      <Text>
        {label}:{val}
      </Text>
    </View>
  );
});

const Btn = React.memo((props) => {
  const {label, action} = props;
  console.log(`${label} inside Btn render`);
  return (
    <View>
      <Button
        style={{flex: 1}}
        onPress={() => action()}
        title={label}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
});

const MultiCount = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  //   const incNum = () => setNumber(number + 1);
  //   const incCount = () =>
  //     setCount((prevState) => {
  //       console.log('inc coutn run');
  //       return prevState + 1;
  //     });
  const incNum = useCallback(() => {
    setNumber(number + 1);
  }, [number]);

  const incCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <View>
      <Text>Mutli Count</Text>
      <Show label="number" val={number} />
      <Btn label="number" action={incNum} />
      <Show label="count" val={count} />
      <Btn label="count" action={incCount} />
    </View>
  );
};

export default MultiCount;
