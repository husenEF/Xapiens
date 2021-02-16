import {createStore, applyMiddleware, combineReducers} from 'redux';

import {globalReducer, userReducer} from './reducer';
const logger = (state) => (next) => (action) => {
  console.log(`Memanggil ${action.type}`);
  return next(action);
};

const rootReducer = combineReducers({
  global: globalReducer,
  user: userReducer,
});

//2.3 initialize store
const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
