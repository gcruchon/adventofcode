const validateBoardingPass = require("./validateBoardingPass");

test("Boarding Pass should be 10 letters long", () => {
  expect(validateBoardingPass("FBFBBFFRLR")).toBe(true);
  expect(validateBoardingPass("FBFBBFFRL")).toBe(false);
  expect(validateBoardingPass("FFBFBBFFRLR")).toBe(false);
});
test("Boarding Pass should start with 7 F or B", () => {
  expect(validateBoardingPass("FBFBBFFRRR")).toBe(true);
  expect(validateBoardingPass("FBFBBFRRRR")).toBe(false);
  expect(validateBoardingPass("FBAFBBFFRR")).toBe(false);
});
test("Boarding Pass should end with R R or L", () => {
  expect(validateBoardingPass("FBFBBFFRRR")).toBe(true);
  expect(validateBoardingPass("FBFBBFFLLL")).toBe(true);
  expect(validateBoardingPass("FBFBBFFLRL")).toBe(true);
  expect(validateBoardingPass("FBFBBFLLRL")).toBe(false);
  expect(validateBoardingPass("FBFBBFFLAL")).toBe(false);
});