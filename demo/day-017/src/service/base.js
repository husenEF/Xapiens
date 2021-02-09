import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'api.openweathermap.org/data/2.5/weather',
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    console.log({request1: config});
    const newHeader = config.headers;
    newHeader['token'] = 'asdasd asdasd';
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
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default instance;
