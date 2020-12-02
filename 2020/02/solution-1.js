
const data = require('./data');
const passwordIsValid = require('./passwordIsValid');

const results = data.filter(passwordIsValid)
console.log('result', results.length);

