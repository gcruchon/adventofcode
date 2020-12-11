const getVisibleNeighbours = require("./getVisibleNeighbours");

const seats = [
  "#....",
  ".....", 
  "..L..", 
  ".....", 
  "....."
];

test("getNeighbours", () => {
  expect(getVisibleNeighbours(seats, 2, 2)).toEqual([
    "#",".",".",
    ".",    ".",
    ".",".",".",
  ]);
  expect(getVisibleNeighbours(seats, 0, 0)).toEqual([
    ".",".",".",
    ".",    ".",
    ".",".","L",
  ]);
  expect(getVisibleNeighbours(seats, 0, 2)).toEqual([
    ".",".",".",
    "#",    ".",
    ".","L",".",
  ]);
  expect(getVisibleNeighbours(seats, 0, 3)).toEqual([
    ".",".",".",
    "#",    ".",
    ".",".",".",
  ]);
  expect(getVisibleNeighbours(seats, 0, 4)).toEqual([
    ".",".",".",
    "#",    ".",
    "L",".",".",
  ]);
  expect(getVisibleNeighbours(seats, 1, 1)).toEqual([
    "#",".",".",
    ".",    ".",
    ".",".","L",
  ]);
  expect(getVisibleNeighbours(seats, 2, 0)).toEqual([
    ".","#",".",
    ".",    "L",
    ".",".",".",
  ]);
  expect(getVisibleNeighbours(seats, 4, 0)).toEqual([
    ".","#","L",
    ".",    ".",
    ".",".",".",
  ]);
});
