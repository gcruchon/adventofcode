const fs = require("fs");

const input = fs.readFileSync("./2020/04/input.txt", { encoding: "utf-8", flag: "r" });
const lines = input.split("\n\n");
const data = lines.map((value) => {
  // console.debug(value);
  return value;
});

module.exports = data;
