const showNum = (num) => {
  for (let i = 0; i <= num; i++) {
    const text = i % 2 === 0 ? "even" : "odd";

    console.log(i, text);
    // if (i % 2 === 0) {
    //   console.log(i, "even");
    // } else console.log(i, "odd");
  }
};

showNum(5);
