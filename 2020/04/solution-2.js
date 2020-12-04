const data = require("./data");
const getField = require("./getField");
const hasMandatoryData = require("./hasMandatoryData");
const {
  validateBirthYear,
  validateIssueYear,
  validateExpirationYear,
  validateHeight,
  validateHairColor,
  validateEyeColor,
  validatePassportId,
} = require("./validate");

const mandatoryFields = {
  byr: validateBirthYear,
  iyr: validateIssueYear,
  eyr: validateExpirationYear,
  hgt: validateHeight,
  hcl: validateHairColor,
  ecl: validateEyeColor,
  pid: validatePassportId,
};

const results = data.filter((passeport) =>
  hasMandatoryData(mandatoryFields, passeport)
);
console.log("results", results.length);
