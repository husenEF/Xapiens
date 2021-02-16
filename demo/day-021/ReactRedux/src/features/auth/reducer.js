import {LOG_OUT, SET_LOGIN} from './constants';

const defaultState = {
  isLogin: false,
  dataLogin: {
    id: null,
  },
};

const reducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case SET_LOGIN:
      return {isLogin: true, dataLogin: {id: 1}};
      break;
    case LOG_OUT:
      return {isLogin: false, dataLogin: {id: null}};
      break;

    default:
      return state;
      break;
  }
};

export default reducer;
