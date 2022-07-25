const groupingReducerHOF = (miniArrLength) => {
  const groupingReducer = (prevVal, currArr, index) => {
    if (index % miniArrLength === 0) {
      prevVal.push([]);
    }
    prevVal[prevVal.length - 1].push(currArr);
    return prevVal;
  }
  return groupingReducer;
}

const groupArrayElements = (arr, divider) => {
  const miniArraySize = Math.ceil(arr.length / divider);
  return arr.reduce(groupingReducerHOF(miniArraySize), []);
}

module.exports = groupArrayElements;

