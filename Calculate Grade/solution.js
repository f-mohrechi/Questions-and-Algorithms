const calculate = (array) => {
  let sum = 0;
  for (let i of array) {
    sum += i;
  }
  let avarage = sum / array.length;
  if (avarage <= 59) {
    return "F";
  }
  if (avarage <= 69) {
    return "D";
  }
  if (avarage <= 79) {
    return "C";
  }
  if (avarage <= 89) {
    return "B";
  }
  if (avarage <= 100) {
    return "A";
  }
};

console.log(calculate([90, 90, 90]));
