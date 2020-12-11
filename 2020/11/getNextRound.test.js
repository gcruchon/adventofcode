const getNextRound = require("./getNextRound");
const getNeighbours = require("./getNeighbours");


const seatsInit = [
  "L.LL.LL.LL",
  "LLLLLLL.LL",
  "L.L.L..L..",
  "LLLL.LL.LL",
  "L.LL.LL.LL",
  "L.LLLLL.LL",
  "..L.L.....",
  "LLLLLLLLLL",
  "L.LLLLLL.L",
  "L.LLLLL.LL",
];

const seatsRound1 = [
  '#.##.##.##',
  '#######.##',
  '#.#.#..#..',
  '####.##.##',
  '#.##.##.##',
  '#.#####.##',
  '..#.#.....',
  '##########',
  '#.######.#',
  '#.#####.##',
];

const seatsRound2 = [
  "#.LL.L#.##",
  "#LLLLLL.L#",
  "L.L.L..L..",
  "#LLL.LL.L#",
  "#.LL.LL.LL",
  "#.LLLL#.##",
  "..L.L.....",
  "#LLLLLLLL#",
  "#.LLLLLL.L",
  "#.#LLLL.##",
];

const seatsRound3 = [
  "#.##.L#.##",
  "#L###LL.L#",
  "L.#.#..#..",
  "#L##.##.L#",
  "#.##.LL.LL",
  "#.###L#.##",
  "..#.#.....",
  "#L######L#",
  "#.LL###L.L",
  "#.#L###.##",
];

const seatsRound4 = [
  "#.#L.L#.##",
  "#LLL#LL.L#",
  "L.L.L..#..",
  "#LLL.##.L#",
  "#.LL.LL.LL",
  "#.LL#L#.##",
  "..L.L.....",
  "#L#LLLL#L#",
  "#.LLLLLL.L",
  "#.#L#L#.##",
];

const seatsRound5 = [
  "#.#L.L#.##",
  "#LLL#LL.L#",
  "L.#.L..#..",
  "#L##.##.L#",
  "#.#L.LL.LL",
  "#.#L#L#.##",
  "..L.L.....",
  "#L#L##L#L#",
  "#.LLLLLL.L",
  "#.#L#L#.##",
];

test("getNextRound", () => {
  expect(getNextRound(seatsInit, getNeighbours)).toEqual(seatsRound1);
  expect(getNextRound(seatsRound1, getNeighbours)).toEqual(seatsRound2);
  expect(getNextRound(seatsRound2, getNeighbours)).toEqual(seatsRound3);
  expect(getNextRound(seatsRound3, getNeighbours)).toEqual(seatsRound4);
  expect(getNextRound(seatsRound4, getNeighbours)).toEqual(seatsRound5);
  expect(getNextRound(seatsRound5, getNeighbours)).toEqual(seatsRound5);
});
