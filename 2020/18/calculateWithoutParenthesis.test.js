const calulateWithoutParenthesis = require('./calulateWithoutParenthesis');

test("calulateWithoutParenthesis", () => {
    expect(calulateWithoutParenthesis('67')).toEqual(67);
    expect(calulateWithoutParenthesis('1 + 2')).toEqual(3);
    expect(calulateWithoutParenthesis('1 * 2')).toEqual(2);
    expect(calulateWithoutParenthesis('1 + 2 * 3')).toEqual(9);
    expect(calulateWithoutParenthesis('1 + 2 * 3 + 4 * 5 + 6')).toEqual(71);
});
