import React, {createContext, useEffect, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {ActionBtn, Display, MyList} from './src/components';

// //1 inisialisasi context
// const CounterContext = createContext({counter: 0});

// const Display = () => {
//   return (
//     <View style={{padding: 5, borderColor: 'red', borderWidth: 1}}>
//       <Text>Display component</Text>
//       <CounterContext.Consumer>
//         {(value) => {
//           console.log({value});
//           return <Text>consumer display {value.no}</Text>;
//         }}
//       </CounterContext.Consumer>
//     </View>
//   );
// };

// const Actions = () => {
//   return (
//     <View style={{padding: 5, borderColor: 'blue', borderWidth: 1}}>
//       <Text>Action btn</Text>
//       <CounterContext.Consumer>
//         {(value) => {
//           return (
//             <TouchableOpacity onPress={value.inc}>
//               <Text>action btn {value.no}</Text>
//             </TouchableOpacity>
//           );
//         }}
//       </CounterContext.Consumer>
//     </View>
//   );
// };

// const App = () => {
//   const [counter, setCounter] = useState(10);
//   useEffect(() => {
//     setTimeout(() => {
//       setCounter(100);
//     }, 5000);
//   }, []);

//   const inc = () => {
//     setCounter(counter + 1);
//   };
//   const dec = () => {
//     setCounter(counter - 1);
//   };
//   return (
//     <View>
//       <CounterContext.Provider value={{no: counter, inc, dec}}>
//         <Display />
//         <Actions />
//       </CounterContext.Provider>
//     </View>
//   );
// };

import {CounterProvider} from './src/context/Counter';

const App = () => {
  return (
    <View>
      <CounterProvider>
        <Display />
        <ActionBtn />
        <MyList />
      </CounterProvider>
    </View>
  );
};

export default App;
