import Api from './base';

export const getByCity = async (id) => {
  try {
    let url = '';
    const obj = {id: `${id}`, appid: '01160df1ec08e18c27d7613242e4435c'};
    // url = JSON.stringify(url);
    for (let key in obj) {
      if (url != '') {
        url += '&';
      }
      url += key + '=' + encodeURIComponent(obj[key]);
    }
    console.log({url});
    const city = await Api.get(`?${url}`);
    console.log({city});
    // return city.data;
    return {};
  } catch (error) {
    console.log({error});
  }
};

export default {};
