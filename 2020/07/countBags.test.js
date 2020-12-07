const countBags = require("./countBags");

const emptyRule = {
  yellow: [],
};
const singleYellowRule = {
  yellow: [{ color: "red", amount: 1 }],
  red: [],
};
const doubleYellowGreenRule = {
  yellow: [{ color: "red", amount: 1 }],
  green: [
    { color: "red", amount: 1 },
    { color: "yellow", amount: 1 },
  ],
  red: [],
};
const doubleYellowRule = {
  yellow: [{ color: "red", amount: 1 }],
  green: [{ color: "blue", amount: 1 }],
  red: [],
  blue: [],
};
const recursiveYellowGreenRule = {
  yellow: [{ color: "red", amount: 1 }],
  green: [{ color: "yellow", amount: 1 }],
  red: [],
};
const exampleRule1 = {
  "light red": [
    { color: "bright white", amount: 1 },
    { color: "muted yellow", amount: 2 },
  ],
  "dark orange": [
    { color: "bright white", amount: 3 },
    { color: "muted yellow", amount: 4 },
  ],
  "bright white": [{ color: "shiny gold", amount: 1 }],
  "muted yellow": [
    { color: "shiny gold", amount: 2 },
    { color: "faded blue", amount: 9 },
  ],
  "shiny gold": [
    { color: "dark olive", amount: 1 },
    { color: "vibrant plum", amount: 2 },
  ],
  "dark olive": [
    { color: "faded blue", amount: 3 },
    { color: "dotted black", amount: 4 },
  ],
  "vibrant plum": [
    { color: "faded blue", amount: 5 },
    { color: "dotted black", amount: 6 },
  ],
  "faded blue": [],
  "dotted black": [],
};
const exampleRule2 = {
  "shiny gold": [{ color: "dark red", amount: 2 }],
  "dark red": [{ color: "dark orange", amount: 2 }],
  "dark orange": [{ color: "dark yellow", amount: 2 }],
  "dark yellow": [{ color: "dark green", amount: 2 }],
  "dark green": [{ color: "dark blue", amount: 2 }],
  "dark blue": [{ color: "dark violet", amount: 2 }],
  "dark violet": [],
};
test("countBags", () => {
  expect(countBags(emptyRule, "yellow")).toEqual(0);
  expect(countBags(singleYellowRule, "yellow")).toEqual(1);
  expect(countBags(doubleYellowGreenRule, "green")).toEqual(3);
  expect(countBags(doubleYellowRule, "yellow")).toEqual(1);
  expect(countBags(recursiveYellowGreenRule, "green")).toEqual(2);
  expect(countBags(exampleRule1, "shiny gold")).toEqual(32);
  expect(countBags(exampleRule2, "shiny gold")).toEqual(126);
});
