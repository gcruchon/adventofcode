const getAcc = require("./getAcc");

const acc = { cmd: 'acc', arg: 1};
const accNegative = { cmd: 'acc', arg: -1};
const nop = { cmd: 'nop', arg: 0};
const jmp1 = { cmd: 'jmp', arg: 1};
const jmpNegative = { cmd: 'jmp', arg: -3};
const nimp = { cmd: 'nmp', arg: -3};

test("getAcc", () => {
  expect(getAcc(0, acc)).toEqual(1);
  expect(getAcc(1, accNegative)).toEqual(0);
  expect(getAcc(0, nop)).toEqual(0);
  expect(getAcc(0, jmp1)).toEqual(0);
  expect(getAcc(0, jmpNegative)).toEqual(0);
  expect(() => { getAcc(0, nimp) }).toThrow();
});