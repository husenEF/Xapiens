import React from 'react';

import {View, Text, Button} from 'react-native';
const DetailScreen = ({route, navigation}) => {
  const {params} = route;
  console.log({route});
  const title = params ? params.title : 'no title';

  navigation.setOptions({
    headerRight: () => (
      <Button onPress={() => navigation.goBack()} title="back" />
    ),
  });

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail Screen : {title}</Text>
      <Button
        onPress={() => {
          navigation.goBack();
        }}
        title="Back"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({title: 'Updated!'})}
      />
    </View>
  );
};

export default DetailScreen;
