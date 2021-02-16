import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => {
    return state.global.name;
  });
  // console.log({result});
  const reset = () => {
    dispatch({type: 'RESET_NAME', payload: 'Refactory'});
  };
  return (
    <View style={{padding: 5, borderColor: 'grey', borderWidth: 1}}>
      <Text>Header</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={{flex: 1, fontSize: 25, fontWeight: 'bold'}}>
          Halo {name}
        </Text>
        <Button title="x" onPress={reset} />
      </View>
    </View>
  );
};

export default Header;
