const { getSeatId, getSeatIdBin } = require("./getSeatId");

test("getSeatId shoudld get the right seatId", () => {
  expect(getSeatId("FBFBBFFRLR")).toBe(357);
  expect(getSeatId("BFFFBBFRRR")).toBe(567);
  expect(getSeatId("FFFBBBFRRR")).toBe(119);
  expect(getSeatId("BBFFBBFRLL")).toBe(820);
});

test("getSeatIdBin shoudld get the right seatId", () => {
  expect(getSeatIdBin("FBFBBFFRLR")).toBe(357);
  expect(getSeatIdBin("BFFFBBFRRR")).toBe(567);
  expect(getSeatIdBin("FFFBBBFRRR")).toBe(119);
  expect(getSeatIdBin("BBFFBBFRLL")).toBe(820);
});