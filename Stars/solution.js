const showStars = (num) => {
  for (let rows = 1; rows <= num; rows++) {
    let pattern = "";
    for (let stars = 1; stars <= rows; stars++) {
      pattern += "*";
    }
    console.log(pattern);
  }
};

showStars(5);
