const { TestScheduler } = require("jest")
const multiply = require("../functions/multiply")

test('two *  two is four', () => {
    expect(multiply(2, 2)).toBe(4);

    // expect(2 === 2).toBeFalsy()
});