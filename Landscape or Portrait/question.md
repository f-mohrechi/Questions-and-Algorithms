## Landscape or Portrait

Write a function that takes two arguments, `width` and `height`, representing the dimensions of a rectangle. The function should return `true` if the rectangle is in landscape orientation (width is greater than height), and `false` if it is in portrait orientation (height is greater than width).

Examples:

```javascript
isLandscape(800, 600); // true (landscape)
isLandscape(600, 800); // false (portrait)
isLandscape(1000, 1000); // false (square, but we'll consider it portrait)
```
