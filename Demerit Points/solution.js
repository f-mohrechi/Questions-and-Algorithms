let speedLimit = 70;
let kmPerPoint = 5;

const checkSpeed = (speed) => {
  if (speed < speedLimit + kmPerPoint) {
    return "ok";
  }

  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) {
    return "License Suspended";
  } else return `points, ${points}`;
};

console.log(checkSpeed(75));
