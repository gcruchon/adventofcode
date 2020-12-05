const { getColumnPartOfBoardingPass, getColumnNumber } = require("./getColumn");

/* ----------------------------   ------------- */
/* ------ getColumnPartOfBoardingPass --------- */
/* --------------------------------   --------- */
test("getColumnPartOfBoardingPass shoudld get the last 3 letters", () => {
  expect(getColumnPartOfBoardingPass("FBFBBFFRLR")).toBe('RLR');
  expect(getColumnPartOfBoardingPass("FFFFFFFLLL")).toBe('LLL');
  expect(getColumnPartOfBoardingPass("BBBBBBBRRR")).toBe('RRR');
});

/* -------------------   ---------- */
/* ------ getColumnNumber --------- */
/* ------------------   ----------- */
test("getColumnNumber should get the proper number", () => {
  expect(getColumnNumber("LLL")).toBe(0);
  expect(getColumnNumber("LLR")).toBe(1);
  expect(getColumnNumber("RLR")).toBe(5);
  expect(getColumnNumber("RRL")).toBe(6);
  expect(getColumnNumber("RRR")).toBe(7);
});