const {
  validateBirthYear,
  validateIssueYear,
  validateExpirationYear,
  validateHeight,
  validateHairColor,
  validateEyeColor,
  validatePassportId,
} = require("./validate");

/* ---------------------------------- */
/* ------ validateBirthYear --------- */
/* ---------------------------------- */
test("validateBirthYear should reject when 4 letters", () => {
  expect(validateBirthYear("abcd")).toBe(false);
});
test("validateBirthYear should reject when 3 digits", () => {
  expect(validateBirthYear("190")).toBe(false);
});
test("validateBirthYear should reject when 5 digits", () => {
  expect(validateBirthYear("19780")).toBe(false);
});
test("validateBirthYear should accept when 4 digits", () => {
  expect(validateBirthYear("1980")).toBe(true);
});
test("validateBirthYear should be greater than 1920", () => {
  expect(validateBirthYear("1920")).toBe(true);
  expect(validateBirthYear("1919")).toBe(false);
});
test("validateBirthYear should be lower than 2002", () => {
  expect(validateBirthYear("2002")).toBe(true);
  expect(validateBirthYear("2003")).toBe(false);
});

/* ---------------------------------- */
/* ------ validateIssueYear --------- */
/* ---------------------------------- */
test("validateIssueYear should reject when 4 letters", () => {
  expect(validateIssueYear("abcd")).toBe(false);
});
test("validateIssueYear should reject when 3 digits", () => {
  expect(validateIssueYear("190")).toBe(false);
});
test("validateIssueYear should reject when 5 digits", () => {
  expect(validateIssueYear("19780")).toBe(false);
});
test("validateIssueYear should accept when 4 digits", () => {
  expect(validateIssueYear("2015")).toBe(true);
});
test("validateIssueYear should be greater than 2010", () => {
  expect(validateIssueYear("2010")).toBe(true);
  expect(validateIssueYear("2009")).toBe(false);
});
test("validateIssueYear should be lower than 2020", () => {
  expect(validateIssueYear("2020")).toBe(true);
  expect(validateIssueYear("2021")).toBe(false);
});

/* --------------------------------------- */
/* ------ validateExpirationYear --------- */
/* --------------------------------------- */
test("validateExpirationYear should reject when 4 letters", () => {
  expect(validateExpirationYear("abcd")).toBe(false);
});
test("validateExpirationYear should reject when 3 digits", () => {
  expect(validateExpirationYear("190")).toBe(false);
});
test("validateExpirationYear should reject when 5 digits", () => {
  expect(validateExpirationYear("19780")).toBe(false);
});
test("validateExpirationYear should accept when 4 digits", () => {
  expect(validateExpirationYear("2023")).toBe(true);
});
test("validateExpirationYear should be greater than 2020", () => {
  expect(validateExpirationYear("2020")).toBe(true);
  expect(validateExpirationYear("2019")).toBe(false);
});
test("validateExpirationYear should be lower than 2030", () => {
  expect(validateExpirationYear("2030")).toBe(true);
  expect(validateExpirationYear("2031")).toBe(false);
});

/* ------------------------------- */
/* ------ validateHeight --------- */
/* ------------------------------- */
test("validateHeight should reject when no unit", () => {
  expect(validateHeight("60")).toBe(false);
});
test("validateHeight should reject when unkown unit", () => {
  expect(validateHeight("60px")).toBe(false);
});
test("validateHeight should accept when unit is in", () => {
  expect(validateHeight("60in")).toBe(true);
});
test("validateHeight should accept when height is higher than 59 in", () => {
  expect(validateHeight("59in")).toBe(true);
  expect(validateHeight("58in")).toBe(false);
});
test("validateHeight should accept when height is lower than 76 in", () => {
  expect(validateHeight("76in")).toBe(true);
  expect(validateHeight("77in")).toBe(false);
});
test("validateHeight should accept when unit is cm", () => {
  expect(validateHeight("180cm")).toBe(true);
});
test("validateHeight should accept when height is higher than 150 cm", () => {
  expect(validateHeight("150cm")).toBe(true);
  expect(validateHeight("149cm")).toBe(false);
});
test("validateHeight should accept when height is higher than 193 cm", () => {
  expect(validateHeight("193cm")).toBe(true);
  expect(validateHeight("194cm")).toBe(false);
});


/* ---------------------------------- */
/* ------ validateHairColor --------- */
/* ---------------------------------- */
test("validateHairColor should reject when value does not start with #", () => {
  expect(validateHairColor("abc123")).toBe(false);
});
test("validateHairColor should reject when value does not have 6 chars after #", () => {
  expect(validateHairColor("#abc12")).toBe(false);
  expect(validateHairColor("#abc1234")).toBe(false);
});
test("validateHairColor should reject when value contains other than 0-9 a-f", () => {
  expect(validateHairColor("#h12345")).toBe(false);
  expect(validateHairColor("#123abz")).toBe(false);
});
test("validateHairColor should accept when value contains 6 times 0-9 a-f starting with #", () => {
  expect(validateHairColor("#123456")).toBe(true);
  expect(validateHairColor("#abcdef")).toBe(true);
  expect(validateHairColor("#123abc")).toBe(true);
});


/* ---------------------------------- */
/* ------ validateEyeColor --------- */
/* ---------------------------------- */
test("validateEyeColor should accept when value is amb blu brn gry grn hzl oth", () => {
  expect(validateEyeColor("amb")).toBe(true);
  expect(validateEyeColor("blu")).toBe(true);
  expect(validateEyeColor("brn")).toBe(true);
  expect(validateEyeColor("gry")).toBe(true);
  expect(validateEyeColor("grn")).toBe(true);
  expect(validateEyeColor("hzl")).toBe(true);
  expect(validateEyeColor("oth")).toBe(true);
});


/* ----------------------------------- */
/* ------ validatePassportId --------- */
/* ----------------------------------- */
test("validateEyeColor should accept 9 digits number", () => {
  expect(validatePassportId("123456789")).toBe(true);
  expect(validatePassportId("000000000")).toBe(true);
});
test("validateEyeColor should reject others", () => {
  expect(validatePassportId("12345678")).toBe(false);
  expect(validatePassportId("1234567890")).toBe(false);
  expect(validatePassportId("AAAAAAAAA")).toBe(false);
});