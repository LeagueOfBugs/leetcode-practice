function maxWidthOfVerticalArea(points) {
  return points.reduce((result, point, idx, arr) => {
    if (arr[idx + 1]) {
      result = Math.max(result, Math.abs(point[0] - arr[idx + 1][0]));
      return result;
    } else {
      return result;
    }
  }, 0);
}

points = [
  [8, 7],
  [9, 9],
  [7, 4],
  [9, 7],
];

console.log(maxWidthOfVerticalArea(points));
