const getPossibleSums = require("./getPossibleSums");

const listOfFirst100 = Array.from(Array(101).keys()).slice(1, 101);

test("isLineAlreadyPlayed", () => {
  expect(getPossibleSums([])).toEqual([]);
  expect(getPossibleSums([1])).toEqual([]);
  expect(getPossibleSums([1, 2])).toEqual([3]);
  expect(getPossibleSums([1, 2, 3])).toEqual([3, 4, 5]);
});