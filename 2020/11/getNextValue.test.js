const { EMPTY, OCCUPIED, FLOOR } = require("./const");
const getNextValue = require("./getNexTValue");

test("getNeighbours", () => {
  expect(getNextValue(EMPTY, ['.', 'L', 'L'])).toEqual(OCCUPIED);
  expect(getNextValue(EMPTY, ['.', '#', 'L'])).toEqual(EMPTY);

  expect(getNextValue(OCCUPIED, ['.', '#', 'L'])).toEqual(OCCUPIED);
  expect(getNextValue(OCCUPIED, ['#', '#', '.', '#', 'L'])).toEqual(OCCUPIED);
  expect(getNextValue(OCCUPIED, ['#', '#', '.', '#', 'L', 'L', '#'])).toEqual(EMPTY);
  expect(getNextValue(OCCUPIED, ['#', '#', '.', '#', '#', '#', '#'])).toEqual(EMPTY);

  expect(getNextValue(FLOOR, ['.', '#', 'L'])).toEqual(FLOOR);
  expect(getNextValue(FLOOR, ['#', '#', '.', '#', '#', '#', '#'])).toEqual(FLOOR);
});