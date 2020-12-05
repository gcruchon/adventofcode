const data = require("./data");
const { getSeatIdBin } = require("./getSeatId");

const reducer = (accumulator, currentValue) => Math.max(accumulator, getSeatIdBin(currentValue));

const results = data.reduce(reducer, 0);

console.log("results", results);
