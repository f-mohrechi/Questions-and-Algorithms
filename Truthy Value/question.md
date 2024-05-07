## Count Truthy Values

Write a function `countTruthy` that takes an array as an argument and returns the number of truthy values in the array.

A truthy value is a value that is considered true when evaluated in a Boolean context. In JavaScript, the following values are considered falsy:

- `false`
- `0`
- `''` (empty string)
- `null`
- `undefined`
- `NaN`

All other values, including non-zero numbers, non-empty strings, objects, and arrays, are considered truthy.

### Examples

```javascript
console.log(countTruthy([1, 0, "hello", "", true, false, 9, NaN, undefined])); // Output: 4
console.log(countTruthy([])); // Output: 0
console.log(countTruthy([false, null, 0, "", undefined])); // Output: 0
console.log(countTruthy([1, 2, 3, 4, 5])); // Output: 5
```
