const fs = require("fs");

const input = fs.readFileSync("./2020/12/input.txt", {
  encoding: "utf-8",
  flag: "r",
});
const instructions = input.split("\n");

const getInstruction = (instruction) => {
  return { action: instruction[0], value: parseInt(instruction.substr(1), 10) };
};

const data = instructions
  .filter((instruction) => instruction !== "")
  .map((instruction) => {
    return getInstruction(instruction);
  });

module.exports = data;
