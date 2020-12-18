const calculate = require('./calculate');

test("calculate", () => {
    expect(calculate('67')).toEqual(67);
    expect(calculate('1 + 2')).toEqual(3);
    expect(calculate('1 * 2')).toEqual(2);
    expect(calculate('1 + 2 * 3')).toEqual(9);
    expect(calculate('1 + 2 * 3 + 4 * 5 + 6')).toEqual(71);
    expect(calculate('(5 + 6)')).toEqual(11);
    expect(calculate('1 + (2 * 3) + (4 * (5 + 6))')).toEqual(51);
    expect(calculate('2 * 3 + (4 * 5)')).toEqual(26);
    expect(calculate('5 + (8 * 3 + 9 + 3 * 4 * 3)')).toEqual(437);
    expect(calculate('5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))')).toEqual(12240);
    expect(calculate('((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2')).toEqual(13632);
});
