import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import PostReducer from './posts/reducer';
const rootReducer = combineReducers({
  post: PostReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;
