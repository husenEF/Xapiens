import {GET_DETAIL, GET_POST, SET_LOADING} from './constans';

export const getDetail = (id) => {
  return {type: GET_DETAIL, value: id};
};

export const getList = () => {
  return {type: GET_POST};
};

export const setLoading = (status = true) => {
  return {type: SET_LOADING, value: status};
};
