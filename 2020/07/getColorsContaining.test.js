const getColorsContaining = require("./getColorsContaining");

const emptyRule = {
  yellow: [],
};
const singleYellowRule = {
  yellow: [{ color: "red", amount: 1 }],
};
const doubleYellowGreenRule = {
  yellow: [{ color: "red", amount: 1 }],
  green: [
    { color: "red", amount: 1 },
    { color: "yellow", amount: 1 },
  ],
};
const doubleYellowRule = {
  yellow: [{ color: "red", amount: 1 }],
  green: [{ color: "blue", amount: 1 }],
};
const recursiveYellowGreenRule = {
  yellow: [{ color: "red", amount: 1 }],
  green: [{ color: "yellow", amount: 1 }],
};
const exampleRule = {
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
test("getColorsContaining", () => {
  expect(getColorsContaining(emptyRule, "red")).toEqual([]);
  expect(getColorsContaining(singleYellowRule, "red")).toEqual(["yellow"]);
  expect(getColorsContaining(doubleYellowGreenRule, "red")).toEqual([
    "yellow",
    "green",
  ]);
  expect(getColorsContaining(doubleYellowRule, "red")).toEqual(["yellow"]);
  expect(getColorsContaining(recursiveYellowGreenRule, "red")).toEqual([
    "yellow",
    "green",
  ]);
  expect(getColorsContaining(exampleRule, "shiny gold")).toEqual([
    "bright white",
    "muted yellow",
    "light red",
    "dark orange",
  ]);
});
