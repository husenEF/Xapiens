import React from 'react';
import {View, Text} from 'react-native';

//1 import lib
import {Provider} from 'react-redux';
import MainApp from './src/screens';

import store from './src/features';
// //2 initialization
// //2.1;
// const defaultState = {
//   name: 'Refactory',
//   isLandingPage: true,
//   addres: {
//     home: 'Jalan palagan',
//     office: 'Jlan Plemburan',
//   },
// };

//2.2
//{type, id}

// const globalReducer = (state = defaultState, action) => {
//   console.log({store: action});
//   switch (action.type) {
//     case 'UPDATE_NAME':
//       return {...state, name: action.payload};
//     case 'UPDATE_ADDRES':
//       const newState = state;
//       newState.addres.home = 'jlan kaliurang';
//       return newState;
//     // return {...state, addres: {...state.addres, home: 'jlan kaliurang'}};
//     case 'RESET_NAME':
//       return {...state, name: 'Refactory'};
//     default:
//       return state;
//   }
// };

// const defaultUser = {
//   name: 'Husen',
//   addresss: 'Jln Palagan',
//   office: 'Jlan Palagan',
//   jobs: 'Trainer',
// };
// const userReducer = (state = defaultUser, action) => {
//   switch (action.type) {
//     case 'UPDATE_NAME':
//       return {...state, name: action.payload};

//     case 'DETAIL_USER':
//     default:
//       return state;
//       break;
//   }
// };

// const rootReducer = combineReducers({
//   global: globalReducer,
//   user: userReducer,
// });

// const logger = (state) => (next) => (action) => {
//   console.log(`Memanggil ${action.type}`);
//   return next(action);
// };

// //2.3 initialize store
// const store = createStore(rootReducer, applyMiddleware(logger));

//3 wrap main apps
const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>React Redux</Text>
      </View>
      <MainApp />
    </Provider>
  );
};

export default App;
