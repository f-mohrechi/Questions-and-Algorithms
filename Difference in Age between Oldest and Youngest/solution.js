function ageDifference(ages) {
  var youngest = ages[0];
  var oldest = ages[0];

  for (var i = 1; i < ages.length; i++) {
    if (ages[i] < youngest) {
      youngest = ages[i];
    }
    if (ages[i] > oldest) {
      oldest = ages[i];
    }
  }

  var difference = oldest - youngest;

  return [youngest, oldest, difference];
}

var ages = [10, 20, 30, 40, 50];
console.log(ageDifference(ages));
