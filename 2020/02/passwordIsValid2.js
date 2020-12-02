const passwordIsValid2 = ({ min, max, letter, password }) => {
  const pos1 = min - 1;
  const pos2 = max - 1;
  const charAtPos1 = password[pos1];
  const charAtPos2 = password[pos2];
  /*
  console.debug('---');
  console.debug('password', password);
  console.debug('min', min);
  console.debug('max', max);
  console.debug('letter', letter);
  console.debug('charAtPos1', charAtPos1);
  console.debug('charAtPos2', charAtPos2);
  */
  return (charAtPos1 === letter) ^ (charAtPos2 === letter);
};

module.exports = passwordIsValid2;
