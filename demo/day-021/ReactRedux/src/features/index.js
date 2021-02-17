import {createStore, applyMiddleware, combineReducers} from 'redux';
import storage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

import globalReducer from './global/reducer';
import authReducer from './auth/reducer';

import loginMiddleware from '../helper/login';

const logger = (state) => (next) => (action) => {
  console.log(`Memanggil ${action.type}`);
  return next(action);
};

const rootReducer = combineReducers({
  global: globalReducer,
  auth: authReducer,
  //   user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
//2.3 initialize store
export const store = createStore(
  persistedReducer,
  applyMiddleware(logger, loginMiddleware),
);
export const persistor = persistStore(store);

// export default {store, persistor};
// export default () => {
//   const store = createStore(
//     persistedReducer,
//     applyMiddleware(logger, loginMiddleware),
//   );
//   const persistor = persistStore(store);
//   return {store, persistor};
// };
export default {};
