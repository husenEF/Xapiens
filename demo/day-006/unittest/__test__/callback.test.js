const fetchData = (cb) => {
    return new Promise(resolve => {
        setTimeout(() => {
            cb('peanut butter')
            return resolve()
            // return resolve('peanut butter')
        }, 3000);
    })
}

test('the data is peanut butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
});

// test()
//test 2
//test 3
