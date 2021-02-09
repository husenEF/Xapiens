import React, {createContext, useContext} from 'react';
import {Text, View} from 'react-native';

//1 inisialisasi
// const CounterContext = createContext();

// const Display = () => {
//   return (
//     <CounterContext.Consumer>
//       {(counterData) => {
//         console.log({d: counterData});
//         return (
//           <View>
//             <Text>Display Component</Text>
//           </View>
//         );
//       }}
//     </CounterContext.Consumer>
//   );
// };

// const Increment = () => {
//   const {counter, title, inc} = useContext(CounterContext);
//   // console.log();
//   return (
//     <View>
//       <Text>Increment Component</Text>
//       <Text>Data Counter: {counter}</Text>
//     </View>
//   );
// };

import {CounterProvider} from './src/context/Counter.context';

import {DisplayScreen, FooterScreen} from './src/screens';

const App = () => {
  const data = {
    counter: 10,
    title: 'Halo Dunia',
    inc: () => {
      console.log('inc function');
    },
  };
  return (
    <CounterProvider>
      <Text>Main App</Text>
      {/* <Display />
      <Increment /> */}
      <DisplayScreen />
      <FooterScreen />
    </CounterProvider>
  );
};

export default App;
