const performAddition = require('./performAddition');

test("addParenthesis", () => {
    expect(performAddition('')).toEqual('');
    expect(performAddition('67')).toEqual('67');
    expect(performAddition('1 + 2')).toEqual('3');
    expect(performAddition('1 * 2')).toEqual('1 * 2');
    expect(performAddition('1 + 2 * 3')).toEqual('3 * 3');
    expect(performAddition('11664 + 6 * 2')).toEqual('11670 * 2');
    expect(performAddition('1 + 2 * 3 + 4 * 5 + 6')).toEqual('3 * 7 * 11');
    expect(performAddition('8 * 3 + 9 + 3 * 4 * 3')).toEqual('8 * 15 * 4 * 3');
});
