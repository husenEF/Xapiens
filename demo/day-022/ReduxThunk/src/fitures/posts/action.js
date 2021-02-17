import axios from 'axios';
import {GET_DETAIL, GET_POST, SET_LOADING, SET_POST} from './constans';

export const getDetail = (id) => {
  return {type: GET_DETAIL, value: id};
};

export const getList = () => {
  return {type: GET_POST};
};

export const setLoading = (status = true) => {
  return {type: SET_LOADING, value: status};
};

export const fetchPost = () => {
  return (dispatch) => {
    dispatch(setLoading(true));
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        // console.log({response});
        dispatch({type: SET_POST, value: response.data});
      })
      .catch((error) => {
        console.log({error});
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
};
