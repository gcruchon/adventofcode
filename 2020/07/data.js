const fs = require("fs");

const input = fs.readFileSync("./2020/07/input.txt", {
  encoding: "utf-8",
  flag: "r",
});
const groups = input.split("\n");

const getBagContent = (content) => {
  if (content.trim() === "no other bags.") {
    return [];
  } else {
    const descriptions = content.split(",");
    return descriptions.map((description) => {
      const matches = [...description.matchAll(/(\d+) (.+) bag/gi)];
      if (matches.length === 1) {
        const amount = matches[0][1];
        const color = matches[0][2];
        return { color, amount };
      } else {
        throw `strange content = ${description}`;
      }
    });
  }
};

const data = groups.reduce((accumulator, bagDescription) => {
  const matches = [...bagDescription.matchAll(/^(.+) bags contain (.+)$/gi)];
  if (matches.length != 1) {
    throw `strange bags = ${bagDescription}`;
  }
  const color = matches[0][1];
  const contains = getBagContent(matches[0][2]);

  let obj = {};
  obj[color] = contains;
  return { ...accumulator, ...obj };
}, {});

module.exports = data;
