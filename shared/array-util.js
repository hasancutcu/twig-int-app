const groupArrayElements = (arr, divider) => {
  const miniArraySize = Math.ceil(arr.length / divider);

  const result = arr.reduce((prevVal, currArr, index) => {
    if (index % miniArraySize === 0) {
      prevVal.push([]);
    }
    prevVal[prevVal.length - 1].push(currArr);
    return prevVal;
  }, []);
  return result;
}

module.exports = groupArrayElements;

