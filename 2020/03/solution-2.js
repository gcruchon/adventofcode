const numberOnTreeFor = require("./numberOnTreeFor");
const data = require("./data");

const result = [{right: 1, down: 1}, {right: 3, down: 1}, {right: 5, down: 1}, {right: 7, down: 1}, {right: 1, down: 2}].map((movement) => numberOnTreeFor(movement, data));
console.log("result", result.reduce((a, b) => a * b, 1));
