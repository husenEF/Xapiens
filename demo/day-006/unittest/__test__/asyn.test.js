// connect to db  - CRUD {cread . read. update ,delete}
// write/read file
// manage/manipulate data

const fetchData = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            // cb('peanut butter')
            return resolve('peanut butter')
            // return resolve('peanut butter')
        }, 3000);
    })
}

test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
  });