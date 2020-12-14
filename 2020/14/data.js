const fs = require("fs");

const input = fs.readFileSync("./2020/14/input.txt", {
  encoding: "utf-8",
  flag: "r",
});
const notes = input.split("\n");

module.exports = notes.map(instruction => {
  const matchesMask = instruction.match(/^mask = ([01X]+)$/);
  if(matchesMask) {
      return {
          type: 'mask',
          value: matchesMask[1],
      };
    } else {
      const matchesMem = instruction.match(/^mem\[(\d+)\] = (\d+)$/);
      if (matchesMem) {
        return {
          type: 'mem',
          address: matchesMem[1],
          value: parseInt(matchesMem[2], 10),
      };
      } else {
        throw `Non compliant instruction: ${instruction} (${instruction.length})`;
      }
    }
})