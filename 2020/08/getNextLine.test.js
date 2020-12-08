const getNextLine = require("./getNextLine");

const acc = { cmd: 'acc', arg: 1};
const nop = { cmd: 'nop', arg: 0};
const jmp0 = { cmd: 'jmp', arg: 0};
const jmp1 = { cmd: 'jmp', arg: 1};
const jmp4 = { cmd: 'jmp', arg: 4};
const jmpNegative = { cmd: 'jmp', arg: -3};
const nimp = { cmd: 'nmp', arg: -3};

test("isLineAlreadyPlayed", () => {
  expect(getNextLine(0, acc)).toEqual(1);
  expect(getNextLine(0, nop)).toEqual(1);
  expect(() => { getNextLine(0, jmp0) }).toThrow();
  expect(getNextLine(0, jmp1)).toEqual(1);
  expect(getNextLine(0, jmp4)).toEqual(4);
  expect(() => { getNextLine(0, jmpNegative) }).toThrow();
  expect(getNextLine(4, jmpNegative)).toEqual(1);
  expect(() => { getNextLine(0, nimp) }).toThrow();
});