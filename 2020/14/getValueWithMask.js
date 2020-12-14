const getValueWithMask = (number, mask) => {
  let strNewValue = number.toString(2).padStart(36, "0").split('');
  for (let i = 0; i < strNewValue.length; i++) {
    if (mask[i] !== "X") {
      strNewValue[i] = mask[i];
    }
  }
  return parseInt(strNewValue.join(''), 2);
};

module.exports = getValueWithMask;