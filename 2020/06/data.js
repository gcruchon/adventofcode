const fs = require("fs");

const input = fs.readFileSync("./2020/06/input.txt", { encoding: "utf-8", flag: "r" });
const groups = input.split("\n\n");
const data = groups.map((groupeAnswers) => {
  return groupeAnswers.split("\n");
});

module.exports = data;
