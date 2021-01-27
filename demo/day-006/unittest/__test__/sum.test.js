const sum = require("../functions/sum")
const mySum = require("../index")

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});