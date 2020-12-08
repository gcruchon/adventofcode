const fs = require("fs");

const input = fs.readFileSync("./2020/08/input.txt", {
  encoding: "utf-8",
  flag: "r",
});
const instructions = input.split("\n");

const getArgs = (instruction) => {
  const args = instruction.split(" ");
  if (args.length !== 2) {
    throw "Not 2 args... : " + instruction;
  }
  return {
    cmd: args[0],
    arg: parseInt(args[1], 10),
  };
};

const data = instructions.map((instruction) => {
  return getArgs(instruction);
});

module.exports = data;
