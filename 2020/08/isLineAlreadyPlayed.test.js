const isLineAlreadyPlayed = require("./isLineAlreadyPlayed");

test("isLineAlreadyPlayed", () => {
  expect(isLineAlreadyPlayed([], 2)).toEqual(false);
  expect(isLineAlreadyPlayed([1], 2)).toEqual(false);
  expect(isLineAlreadyPlayed([1, 3], 2)).toEqual(false);
  expect(isLineAlreadyPlayed([1, 3, 2], 2)).toEqual(true);
  expect(isLineAlreadyPlayed([1, 2, 3], 2)).toEqual(true);
  expect(isLineAlreadyPlayed([1], 1)).toEqual(true);
});
