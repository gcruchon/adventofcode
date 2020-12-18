const calculate = require("./calculate");
const expressions = require("./data");

console.log('Sum', expressions.map(calculate).reduce((acc, num) => acc + num,0));