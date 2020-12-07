const data = require("./data");
const getColorsContaining = require("./getColorsContaining");

const result = getColorsContaining(data, "shiny gold");
console.log("result", result.length);
