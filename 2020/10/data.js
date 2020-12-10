const fs = require("fs");

const input = fs.readFileSync("./2020/10/input.txt", {
  encoding: "utf-8",
  flag: "r",
});
const adapters = input.split("\n");

const getAdapter = (num) => parseInt(num, 10);

const data = adapters.map((adapter) => {
  if (isNaN(getAdapter(adapter))) {
    throw `NaN = ${adapter}`;
  }
  return getAdapter(adapter);
});

module.exports = data;
