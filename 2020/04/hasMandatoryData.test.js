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

test("hasMandatoryData should return true on valid passports", () => {
  expect(
    hasMandatoryData(
      mandatoryFields,
      `pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
hcl:#623a2f`
    )
  ).toBe(true);
  expect(
    hasMandatoryData(
      mandatoryFields,
      `eyr:2029 ecl:blu cid:129 byr:1989
iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm`
    )
  ).toBe(true);
  expect(
    hasMandatoryData(
      mandatoryFields,
      `hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022`
    )
  ).toBe(true);
  expect(
    hasMandatoryData(
      mandatoryFields,
      `iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719`
    )
  ).toBe(true);
});

test("hasMandatoryData return false on invalid passports", () => {
  expect(
    hasMandatoryData(
      mandatoryFields,
      `eyr:1972 cid:100
hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926`
    )
  ).toBe(false);
  expect(
    hasMandatoryData(
      mandatoryFields,
      `iyr:2019
hcl:#602927 eyr:1967 hgt:170cm
ecl:grn pid:012533040 byr:1946`
    )
  ).toBe(false);
  expect(
    hasMandatoryData(
      mandatoryFields,
      `hcl:dab227 iyr:2012
ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277`
    )
  ).toBe(false);
  expect(
    hasMandatoryData(
      mandatoryFields,
      `hgt:59cm ecl:zzz
eyr:2038 hcl:74454a iyr:2023
pid:3556412378 byr:2007s`
    )
  ).toBe(false);
});
