const fs = require("fs");

const input = fs.readFileSync("./2020/11/input.txt", {
  encoding: "utf-8",
  flag: "r",
});

module.exports = input.split("\n");
