const { getRowPartOfBoardingPass, getRowNumber } = require("./getRow");

/* ----------------------------------------- */
/* ------ getRowPartOfBoardingPass --------- */
/* ----------------------------------------- */
test("getRowPartOfBoardingPass shoudld get the first 7 letters", () => {
  expect(getRowPartOfBoardingPass("FBFBBFFRLR")).toBe('FBFBBFF');
  expect(getRowPartOfBoardingPass("FFFFFFFRLR")).toBe('FFFFFFF');
  expect(getRowPartOfBoardingPass("BBBBBBBRLR")).toBe('BBBBBBB');
});

/* ----------------------------- */
/* ------ getRowNumber --------- */
/* ----------------------------- */
test("getRowNumber should get the proper number", () => {
  expect(getRowNumber("FBFBBFF")).toBe(44);
  expect(getRowNumber("BFFBBFB")).toBe(77);
  expect(getRowNumber("FFFFFFF")).toBe(0);
  expect(getRowNumber("BBBBBBB")).toBe(127);
});