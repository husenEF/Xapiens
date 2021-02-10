import Api from './base';

export const callLogin = async (data) => {
  const response = await Api.post('/v1/auth/login', {
    data: {...data},
  });
  return response.data.data;
  //   console.log({login: response});
};

export default {};
