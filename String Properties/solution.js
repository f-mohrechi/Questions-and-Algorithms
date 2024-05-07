const showProperties = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      console.log(`${key}: ${obj[key]}`);
    }
  }
};

showProperties({
  name: "John",
  age: 30,
  city: "fjwpq",
});
