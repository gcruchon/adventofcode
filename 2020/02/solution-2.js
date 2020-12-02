
const data = require('./data');
const passwordIsValid2 = require('./passwordIsValid2');

const results = data.filter(passwordIsValid2)
console.log('result', results.length);

