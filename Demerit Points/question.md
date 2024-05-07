## Demerit Points

Write a function `checkSpeed` that takes a `speed` parameter (a number representing the speed in km/h). The function should return one of the following strings based on the rules below:

1. If the speed is less than 75 km/h, return "Ok".
2. For every 5 km/h above 70 km/h, the driver gets one demerit point.
3. If the driver gets 12 or more demerit points, return "License Suspended".
4. Otherwise, return "Points, X" where X is the number of demerit points.

For example:

- `checkSpeed(65)` should return "Ok"
- `checkSpeed(75)` should return "Points, 1"
- `checkSpeed(86)` should return "Points, 3"
- `checkSpeed(130)` should return "License Suspended"

Note: The speed limit is 70 km/h, and for every 5 km/h above the speed limit, the driver gets one demerit point.
