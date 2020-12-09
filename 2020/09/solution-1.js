const numbers = require("./data");
const getNotMatchingNumber = require('./getNotMatchingNumber');

console.log("Not matching number: ", getNotMatchingNumber(numbers, 25).notMatchingNumber);