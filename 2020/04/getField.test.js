const getField = require('./getField');
const passeport = `hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022`;

test("getField should get a field from a long string", () => {
  expect(getField('hcl', passeport)).toBe('#888785');
  expect(getField('hgt', passeport)).toBe('164cm');
  expect(getField('byr', passeport)).toBe('2001');
  expect(getField('iyr', passeport)).toBe('2015');
  expect(getField('cid', passeport)).toBe('88');
  expect(getField('pid', passeport)).toBe('545766238');
  expect(getField('ecl', passeport)).toBe('hzl');
  expect(getField('eyr', passeport)).toBe('2022');
});

test("getField should get NULL when not found", () => {
  expect(getField('toto', passeport)).toBe('');
});
