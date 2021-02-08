import Api from './api';

const getUser = async () => {
  const data = await Api.get('users');
  console.log({data});
  return data.data;
};

const postUser = async (field, header) => {
  const responseData = await Api.post('users', {data: field}, header);
  console.log({responseData});
  return responseData.data;
};

export {getUser, postUser};

export default {};
