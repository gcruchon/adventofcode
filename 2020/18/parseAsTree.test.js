const parseAsTree = require("./parseAsTree");

test("parseAsTree", () => {
  expect(parseAsTree("")).toEqual(0);
  expect(parseAsTree("67")).toEqual(67);
  expect(parseAsTree("1 + 2")).toEqual({ operator: "+", operands: [1, 2] });
  expect(parseAsTree("1 * 2")).toEqual({ operator: "*", operands: [1, 2] });
  expect(parseAsTree("1 * 2 + 3")).toEqual({
    operator: "+",
    operands: [{ operator: "*", operands: [1, 2] }, 3],
  });
  expect(parseAsTree("1 + 2 * 3 + 4 * 5 + 6")).toEqual({
    operator: "+",
    operands: [
      {
        operator: "*",
        operands: [
          {
            operator: "+",
            operands: [
              {
                operator: "*",
                operands: [{ operator: "+", operands: [1, 2] }, 3],
              },
              4,
            ],
          },
          5,
        ],
      },
      6,
    ],
  });
  expect(parseAsTree("(5 + 6)")).toEqual({ operator: "+", operands: [5, 6] });
  expect(parseAsTree("1 + (2 * 3)")).toEqual({
    operator: "+",
    operands: [1, { operator: "*", operands: [2, 3] }],
  });
  expect(parseAsTree("1 + (2 * 3) + (4 * (5 + 6))")).toEqual({
    operator: "+",
    operands: [
      { operator: "+", operands: [1, { operator: "*", operands: [2, 3] }] },
      { operator: "*", operands: [4, { operator: "+", operands: [5, 6] }] },
    ],
  });
  expect(parseAsTree("2 * 3 + (4 * 5)")).toEqual({
    operator: "+",
    operands: [
      { operator: "*", operands: [2, 3] },
      { operator: "*", operands: [4, 5] },
    ],
  });
  expect(parseAsTree("5 + (8 * 3 + 9 + 3 * 4 * 3)")).toEqual({
    operator: "+",
    operands: [
      5,
      {
        operator: "*",
        operands: [
          {
            operator: "*",
            operands: [
              {
                operator: "+",
                operands: [
                  {
                    operator: "+",
                    operands: [{ operator: "*", operands: [8, 3] }, 9],
                  },
                  3,
                ],
              },
              4,
            ],
          },
          3,
        ],
      },
    ],
  });
  expect(parseAsTree("5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))")).toEqual({
    operator: "*",
    operands: [
      { operator: "*", operands: [5, 9] },
      {
        operator: "+",
        operands: [
          {
            operator: "*",
            operands: [
              {
                operator: "+",
                operands: [
                  {
                    operator: "*",
                    operands: [{ operator: "*", operands: [7, 3] }, 3],
                  },
                  9,
                ],
              },
              3,
            ],
          },
          { operator: "*", operands: [{ operator: "+", operands: [8, 6] }, 4] },
        ],
      },
    ],
  });
  expect(
    parseAsTree("((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2")
  ).toEqual({
    operator: "*",
    operands: [
      {
        operator: "+",
        operands: [
          {
            operator: "+",
            operands: [
              {
                operator: "+",
                operands: [
                  {
                    operator: "*",
                    operands: [
                      {
                        operator: "*",
                        operands: [{ operator: "+", operands: [2, 4] }, 9],
                      },
                      {
                        operator: "+",
                        operands: [
                          {
                            operator: "*",
                            operands: [{ operator: "+", operands: [6, 9] }, 8],
                          },
                          6,
                        ],
                      },
                    ],
                  },
                  6,
                ],
              },
              2,
            ],
          },
          4,
        ],
      },
      2,
    ],
  });
});
