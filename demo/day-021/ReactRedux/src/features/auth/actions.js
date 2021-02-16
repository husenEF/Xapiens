import {LOG_OUT, SET_LOGIN, LOGIN} from './constants';

export const setLogin = {type: SET_LOGIN};
export const logOut = (id) => {
  return {type: LOG_OUT, payload: id};
};
export const login = {type: LOGIN};
