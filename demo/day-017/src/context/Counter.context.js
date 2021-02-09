import React, {createContext, useState} from 'react';

//1. inisialisasi
const MasterCounter = createContext();
//2. call provider
const CounterProvider = ({children}) => {
  const [data, setData] = useState(0);
  const [title, setTitle] = useState('');
  const upTitle = (text) => setTitle(text);

  const allData = {
    data,
    title,
    inc: () => {
      setData(data + 1);
    },
    upTitle,
  };

  return (
    <MasterCounter.Provider value={allData}>{children}</MasterCounter.Provider>
  );
};

const CounterConsumer = MasterCounter.Consumer;

export default MasterCounter;

export {CounterProvider, CounterConsumer};
