import {UPDATE_NAME, RESET} from './constans';

export const updateName = (name) => {
  return {type: UPDATE_NAME, payload: name};
};

export const resetName = () => {
  return {type: RESET, payload: 'Refactory'};
};
