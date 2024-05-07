const countTruthy = (array) => {
  let count = 0;
  for (let value of array) {
    if (value) {
      count++;
    }
  }
  return count;
};

console.log(countTruthy([1, 0, "hello", "", true, false, 9, NaN, undefined]));
