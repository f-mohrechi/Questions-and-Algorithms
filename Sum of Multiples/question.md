## Sum of Multiples of 3 or 5

Write a function that takes a number `num` as an argument and returns the sum of all the multiples of 3 or 5 below `num`.

For example, if `num` is 10, the multiples of 3 or 5 below 10 are 3, 5, 6, and 9, and their sum is 23.

The function should follow these rules:

1. It should use a `for` loop to iterate from 1 to `num - 1`.
2. For each number in the loop, it should check if the number is divisible by 3 or 5 using the modulus operator `%`.
3. If the number is divisible by 3 or 5, it should be added to a running total.
4. After the loop finishes, the function should return the total.

Here's the provided code:

```javascript
const sum = (num) => {
  let total = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  return total;
};

console.log(sum(6));
```

console.log(sum(10)); // Output: 23
