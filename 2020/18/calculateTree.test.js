const calculateTree = require("./calculateTree");

test("calculateTree", () => {
  expect(calculateTree(67)).toEqual(67);
  expect(calculateTree({ operator: "+", operands: [1, 2] })).toEqual(3);
  expect(calculateTree({ operator: "*", operands: [1, 2] })).toEqual(2);
  expect(
    calculateTree({
      operator: "+",
      operands: [{ operator: "*", operands: [1, 2] }, 3],
    })
  ).toEqual(5);
});
