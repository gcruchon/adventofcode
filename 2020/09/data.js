const fs = require("fs");

const input = fs.readFileSync("./2020/09/input.txt", {
  encoding: "utf-8",
  flag: "r",
});
const instructions = input.split("\n");

const getNumber = (num) => parseInt(num, 10);

const data = instructions.map((num) => {
  if (isNaN(getNumber(num))) {
    throw `NaN = ${num}`;
  }
  return getNumber(num);
});

module.exports = data;
