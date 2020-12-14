const getAddressesWithMask = require("./getAddressesWithMask");

test("getValueWithMask", () => {
  expect(getAddressesWithMask(42, '000000000000000000000000000000X1001X')).toMatchObject([26, 58, 27, 59]);
  expect(getAddressesWithMask(26, '00000000000000000000000000000000X0XX')).toMatchObject([16, 24, 18, 26, 17, 25, 19, 27]);
});
