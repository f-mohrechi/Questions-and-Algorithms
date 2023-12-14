var createCounter = function (init) {
  let current = init;

  function increment() {
    console.log(++current);
  }
  function reset() {
    console.log((current = init));
  }
  function decrement() {
    console.log(--current);
  }

  return { increment, reset, decrement };
};

const counter = createCounter(10);
counter.increment(); // 11
counter.reset(); // 10
counter.decrement(); // 12
