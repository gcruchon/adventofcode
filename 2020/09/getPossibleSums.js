module.exports = (numbers) => {
  // console.log("------------ numbers", numbers);
  return numbers.reduce((acc, numReduce, indexReducer) => {
    const mapped = numbers.map((numMap, indexMap) => {
      /*
        console.log(
        `indexReducer=${indexReducer} | numReduce=${numReduce} | indexMap=${indexMap} | numMap=${numMap}`
      );
      */
      if (indexMap <= indexReducer) {
        // console.log("skipped");
        return null;
      } else {
        // console.log("sum", numMap + numReduce);
        return numMap + numReduce;
      }
    });

    return [...acc, ...mapped.filter((num) => num != null)];
  }, []);
};
