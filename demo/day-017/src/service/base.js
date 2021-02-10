import Axios from 'axios';
import Storage from '@react-native-async-storage/async-storage';
const instance = Axios.create({
  baseURL: 'http://192.168.0.142:3200/api',
});

const token = () => {
  const datToken = Storage.getItem('token') || '';
  return datToken;
};
// 'eyJhbGciOiJIUzI1NiJ9.MQ.Vq2NkJ4rwGRA4L0_blqSxp7o0gjd5t5Ye_Pqc7CZEvg';
// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    console.log({request1: config});
    const newHeader = config.headers;
    //if !login/register
    newHeader['Authorization'] = `Bearer ${token()}`;
    config.headers = newHeader;
    // Do something before request is sent
    console.log({request2: config});
    return config;
  },
  function (error) {
    // Do something with request error
    console.log({instance: error});
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('succes-res', {response});
    return response;
  },
  function (error) {
    console.log('error-res', {error});
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default instance;
