import Api from './base';

export const getProducts = async () => {
  try {
    const data = await Api.get('/v1/product');
    console.log('api', {data});
    return data.data;
  } catch (error) {
    console.log({error});
    return false;
    // return error;
  }
};

export default {};
