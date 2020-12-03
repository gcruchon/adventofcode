const fs = require("fs");

const input = fs.readFileSync("./2020/03/input.txt", { encoding: "utf-8", flag: "r" });
const lines = input.split("\n");
const data = lines.map((value) => {
  let positions = [];
  for (let i = 0; i < value.length; i++) {
    if (value[i] === "#") {
      positions.push(i);
    }
  }
  // console.debug(value, positions);
  return positions;
});

module.exports = {
  mapWidth: lines[0].length,
  map: data,
};
