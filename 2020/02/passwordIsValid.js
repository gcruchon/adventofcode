const passwordIsValid = ({ min, max, letter, password }) => {
  const re = new RegExp(`(${letter})`, "g");
  const matches = password.match(re);
  /*
  console.debug('password', password);
  console.debug('min', min);
  console.debug('max', max);
  console.debug('letter', letter);
  console.debug('matches', matches);
  */
  return matches && matches.length >= min && matches.length <= max;
};

module.exports = passwordIsValid;
