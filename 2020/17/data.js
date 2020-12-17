const fs = require("fs");

const input = fs.readFileSync("./2020/17/input.txt", {
  encoding: "utf-8",
  flag: "r",
});

const rows = input.split("\n");
let activeCubes = [];

rows.forEach((row, y) => {
  for (let x = 0; x < row.length; x++) {
    if (row[x] === "#") {
      activeCubes.push({
        x,
        y,
        z: 0,
        w: 0,
      });
    }
  }
});

module.exports = activeCubes;
