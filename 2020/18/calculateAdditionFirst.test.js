const calculateAdditionFirst = require('./calculateAdditionFirst');

test("calculateAdditionFirst", () => {
    expect(calculateAdditionFirst('1 + 2 * 3 + 4 * 5 + 6')).toEqual(231);
    expect(calculateAdditionFirst('1 + (2 * 3) + (4 * (5 + 6))')).toEqual(51);
    expect(calculateAdditionFirst('2 * 3 + (4 * 5)')).toEqual(46);
    expect(calculateAdditionFirst('5 + (8 * 3 + 9 + 3 * 4 * 3)')).toEqual(1445);
    expect(calculateAdditionFirst('5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))')).toEqual(669060);
    expect(calculateAdditionFirst('((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2')).toEqual(23340);
});
