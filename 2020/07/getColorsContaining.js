const getColorsContaining = (rules, colorToBeFound) => {
  const directContains = Object.keys(rules).filter((color) => {
    return rules[color].some((content) => {
      if (content.color === colorToBeFound) {
        return true;
      }
    });
  });
  let includedInOtherBags = directContains.reduce(
    (acc, directContainColor) => [
      ...acc,
      ...getColorsContaining(rules, directContainColor),
    ],
    []
  );
  const uniqueIncludedInOtherBags = includedInOtherBags.reduce((acc, color) => {
    if (!acc.includes(color) && !directContains.includes(color)) {
      return [...acc, color];
    } else {
      return acc;
    }
  }, []);

  return [...directContains, ...uniqueIncludedInOtherBags];
};

module.exports = getColorsContaining;
