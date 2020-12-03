const numberOnTreeFor = require("./numberOnTreeFor");
const data = require("./data");

const result = [{right: 3, down: 1}].map((movement) => numberOnTreeFor(movement, data));
console.log("result", result);
