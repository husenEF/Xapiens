import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';

import WeatherContext, {WeatherProvider} from '../../context/Weather.context';

const Weather = ({route}) => {
  const {params} = route;
  const MasterWeather = useContext(WeatherContext);
  const {data, callByCity} = MasterWeather;
  console.log({MasterWeather, route});
  return (
    <View>
      <Text>Weather apps</Text>
      <Button title="Get Weather" onPress={() => callByCity(params.cityId)} />
    </View>
  );
};

export default (props) => (
  <WeatherProvider>
    <Weather {...props} />
  </WeatherProvider>
);
