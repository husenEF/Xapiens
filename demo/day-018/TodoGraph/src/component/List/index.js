import {useQuery} from '@apollo/client';
import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {GET_USER} from '../../service/todo';

const List = () => {
  const {loading, data, refetch} = useQuery(GET_USER);
  // console.log({loading, data});

  return (
    <View style={{alignContent: 'center', flex: 1}}>
      {loading ? (
        <ActivityIndicator color="blue" size="large" />
      ) : (
        <>
          <TouchableOpacity onPress={() => refetch()}>
            <Text>Refresh</Text>
          </TouchableOpacity>
          <FlatList
            data={data.todo}
            renderItem={({item, index}) => (
              <Text key={item.id}>
                {index + 1}. {item.name}
              </Text>
            )}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
    </View>
  );
};

export default List;
