const fs = require("fs");

const input = fs.readFileSync("./2020/13/input.txt", {
  encoding: "utf-8",
  flag: "r",
});
const notes = input.split("\n");

module.exports = {
  departureTimestamp: parseInt(notes[0], 10),
  buses: notes[1]
};
