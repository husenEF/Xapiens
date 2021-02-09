import React, {createContext} from 'react';
import {useState} from 'react/cjs/react.development';
import {getByCity} from '../service/weather.api';

const WeatherContext = createContext();

const WeatherProvider = ({children}) => {
  const [data, setData] = useState({});

  const callByCity = async (id) => {
    const data = await getByCity(id);
    console.log({data});
  };

  return (
    <WeatherContext.Provider value={{callByCity, data}}>
      {children}
    </WeatherContext.Provider>
  );
};

const WeatherConsumer = WeatherContext.Consumer;

export {WeatherConsumer, WeatherProvider};
export default WeatherContext;
