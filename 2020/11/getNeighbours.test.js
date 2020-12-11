const getNeighbours = require("./getNeighbours");

const seats = [
  'L.LL.LL.LL',
  'LLLLLLL.LL',
  'L.L.L..L..',
  'LLLL.LL.LL',
  'L.LL.LL.LL',
  'L.LLLLL.LL',
  '..L.L.....',
  'LLLLLLLLLL',
  'L.LLLLLL.L',
  'L.LLLLL.LL',
];

test("getNeighbours", () => {
  expect(getNeighbours(seats, 0, 0)).toEqual(['.', 'L', 'L']);
  expect(getNeighbours(seats, 0, 1)).toEqual(['L', 'L', 'L', 'L', 'L']);
  expect(getNeighbours(seats, 0, 9)).toEqual(['L', 'L', 'L']);

  expect(getNeighbours(seats, 1, 0)).toEqual(['L', '.', 'L', 'L', '.']);
  expect(getNeighbours(seats, 1, 1)).toEqual(['L', '.', 'L', 'L', 'L','L', '.', 'L']);
  expect(getNeighbours(seats, 1, 9)).toEqual(['L', 'L', 'L', '.', '.']);

  expect(getNeighbours(seats, 9, 0)).toEqual(['L', '.', '.']);
  expect(getNeighbours(seats, 9, 1)).toEqual(['L', '.', 'L', 'L', 'L']);
  expect(getNeighbours(seats, 9, 9)).toEqual(['.', 'L', 'L']);
});