const getValueWithMask = require("./getValueWithMask");

test("getValueWithMask", () => {
  expect(getValueWithMask(11, 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X')).toBe(73);
  expect(getValueWithMask(101, 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X')).toBe(101);
  expect(getValueWithMask(0, 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X')).toBe(64);
  expect(getValueWithMask(9, 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X')).toBe(73);
});
