const countOccupied = require("./countOccupied");

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
  '#.##.##.##', //7
  '#######.##', //9
  '#.#.#..#..', //4
  '####.##.##', //8
  '#.##.##.##', //7
  '#.#####.##', //8
  '..#.#.....', //2
  '##########', //10
  '#.######.#', //8
  '#.#####.##', //8
];

const seatsRound2 = [
  "#.LL.L#.##", //4
  "#LLLLLL.L#", //2
  "L.L.L..L..", //0
  "#LLL.LL.L#", //2
  "#.LL.LL.LL", //1
  "#.LLLL#.##", //4
  "..L.L.....", //0
  "#LLLLLLLL#", //2
  "#.LLLLLL.L", //1
  "#.#LLLL.##", //4
];

const seatsRound3 = [
  "#.##.L#.##", //6
  "#L###LL.L#", //5
  "L.#.#..#..", //3
  "#L##.##.L#", //6
  "#.##.LL.LL", //3
  "#.###L#.##", //7
  "..#.#.....", //2
  "#L######L#", //8
  "#.LL###L.L", //4
  "#.#L###.##", //7
];

const seatsRound4 = [
  "#.#L.L#.##", //5
  "#LLL#LL.L#", //3
  "L.L.L..#..", //1
  "#LLL.##.L#", //4
  "#.LL.LL.LL", //1
  "#.LL#L#.##", //5
  "..L.L.....", //0
  "#L#LLLL#L#", //4
  "#.LLLLLL.L", //1
  "#.#L#L#.##", //6
];

const seatsRound5 = [
  "#.#L.L#.##", //
  "#LLL#LL.L#", //
  "L.#.L..#..", //
  "#L##.##.L#", //
  "#.#L.LL.LL", //
  "#.#L#L#.##", //
  "..L.L.....", //
  "#L#L##L#L#", //
  "#.LLLLLL.L", //
  "#.#L#L#.##", //
];

test("getNextRound", () => {
  expect(countOccupied(seatsInit)).toEqual(0);
  expect(countOccupied(seatsRound1)).toEqual(71);
  expect(countOccupied(seatsRound2)).toEqual(20);
  expect(countOccupied(seatsRound3)).toEqual(51);
  expect(countOccupied(seatsRound4)).toEqual(30);
  expect(countOccupied(seatsRound5)).toEqual(37);
});
