import axios from 'axios';
import {setLoading} from './action';

export const fetchPost = () => {
  return (dispatch) => {
    dispatch(setLoading(true));
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log({response});
      })
      .catch((error) => {
        console.log({error});
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
};

export {default as actions} from './action';
export {default as reducer} from './reducer';
// export {default as actions} from './action'
