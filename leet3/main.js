let minTimeToVisitAllPoints = function (points) {
  let startingPoint;
  let nextPoint;
  let xDiff;
  let yDiff;
  let totalTravel = 0;
  for (let i = 0; i < points.length - 1; i++) {
    debugger;
    startingPoint = points[i];
    nextPoint = points[i + 1];
    xDiff = Math.abs(nextPoint[0] - startingPoint[0]);
    yDiff = Math.abs(nextPoint[1] - startingPoint[1]);
    if(xDiff > yDiff){
      totalTravel += xDiff;
    } else {
      totalTravel += yDiff;
    }
  }
  return totalTravel;
};

console.log(minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]]));
