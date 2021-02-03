import {useState} from 'react';

const useCounter = (value = 0) => {
  const [count, setCounter] = useState(value);

  const increment = () => {
    setCounter(count + 1);
  };

  const decrement = () => {
    setCounter(count - 1);
  };
  return [count, increment, decrement, setCounter];
};

export default useCounter;
