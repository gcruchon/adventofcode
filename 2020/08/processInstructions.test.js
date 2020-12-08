const processInstructions = require("./processInstructions");

const instructionEmpty = [];
const oneInstructionAccPositive = [{ cmd: "acc", arg: 1 }];
const oneInstructionAccNegative = [{ cmd: "acc", arg: -1 }];
const oneInstructionNop = [{ cmd: "nop", arg: 0 }];
const oneInstructionJmp = [{ cmd: "jmp", arg: 1 }];
const twoInstructionAcc = [
  { cmd: "acc", arg: 1 },
  { cmd: "acc", arg: 2 },
];
const twoInstructionAccNop = [
  { cmd: "acc", arg: 1 },
  { cmd: "nop", arg: 0 },
];
const twoInstructionAccJmpForward = [
  { cmd: "acc", arg: 1 },
  { cmd: "jmp", arg: 1 },
];
const twoInstructionAccJmpBackward = [
  { cmd: "acc", arg: 1 },
  { cmd: "jmp", arg: -1 },
];
const example = [
  { cmd: "nop", arg: 0 },
  { cmd: "acc", arg: 1 },
  { cmd: "jmp", arg: 4 },
  { cmd: "acc", arg: 3 },
  { cmd: "jmp", arg: -3 },
  { cmd: "acc", arg: 99 },
  { cmd: "acc", arg: 1 },
  { cmd: "jmp", arg: -4 },
  { cmd: "acc", arg: +6 },
];

test("isLineAlreadyPlayed", () => {
  expect(processInstructions(instructionEmpty).acc).toEqual(0);
  expect(processInstructions(instructionEmpty).lastLine).toEqual(null);

  expect(processInstructions(oneInstructionAccPositive).acc).toEqual(1);
  expect(processInstructions(oneInstructionAccPositive).lastLine).toEqual(0);

  expect(processInstructions(oneInstructionAccNegative).acc).toEqual(-1);
  expect(processInstructions(oneInstructionAccNegative).lastLine).toEqual(0);

  expect(processInstructions(oneInstructionNop).acc).toEqual(0);
  expect(processInstructions(oneInstructionNop).lastLine).toEqual(0);

  expect(processInstructions(oneInstructionJmp).acc).toEqual(0);
  expect(processInstructions(oneInstructionJmp).lastLine).toEqual(0);

  expect(processInstructions(twoInstructionAcc).acc).toEqual(3);
  expect(processInstructions(twoInstructionAcc).lastLine).toEqual(1);

  expect(processInstructions(twoInstructionAccNop).acc).toEqual(1);
  expect(processInstructions(twoInstructionAccNop).lastLine).toEqual(1);

  expect(processInstructions(twoInstructionAccJmpForward).acc).toEqual(1);
  expect(processInstructions(twoInstructionAccJmpForward).lastLine).toEqual(1);

  expect(processInstructions(twoInstructionAccJmpBackward).acc).toEqual(1);
  expect(processInstructions(twoInstructionAccJmpBackward).lastLine).toEqual(1);

  expect(processInstructions(example).acc).toEqual(5);
  expect(processInstructions(example).lastLine).toEqual(4);
});
