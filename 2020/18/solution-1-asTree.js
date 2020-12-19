const expressions = require("./data");
const parseAsTree = require("./parseAsTree");
const calculateTree = require("./calculateTree");

console.log('Sum', expressions.map(parseAsTree).map(calculateTree).reduce((acc, num) => acc + num,0));