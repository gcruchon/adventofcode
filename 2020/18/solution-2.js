const calculateAdditionFirst = require("./calculateAdditionFirst");
const expressions = require("./data");

console.log('Sum', expressions.map(calculateAdditionFirst).reduce((acc, num) => acc + num,0));