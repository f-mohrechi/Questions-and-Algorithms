## FizzBuzz

Write a function `fizzBuzz` that takes a number `n` as input and returns:

- `"FizzBuzz"` if `n` is divisible by both 3 and 5
- `"Fizz"` if `n` is divisible by 3
- `"Buzz"` if `n` is divisible by 5
- The number `n` itself if it is not divisible by 3 or 5
- `"not a number"` if the input is not a number

The function should handle all possible inputs, including non-numeric values.

Example:

```javascript
console.log(fizzBuzz(15)); // Output: "FizzBuzz"
console.log(fizzBuzz(9)); // Output: "Fizz"
console.log(fizzBuzz(10)); // Output: "Buzz"
console.log(fizzBuzz(7)); // Output: 7
console.log(fizzBuzz("hello")); // Output: "not a number"
```
