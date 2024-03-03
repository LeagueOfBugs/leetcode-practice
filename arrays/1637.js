const maxWidthOfVerticalArea = (points) => {
  points.sort((a, b) => a[0] - b[0]);

  let maxWidth = 0;

  for (let i = 0; i < points.length - 1; i++) {
    const width = points[i + 1][0] - points[i][0];
    maxWidth = Math.max(maxWidth, width);
  }

  return maxWidth;
}

// Example usage:
const points = [
  [8, 7],
  [9, 9],
  [7, 4],
  [9, 7],
];
console.log(maxWidthOfVerticalArea(points)); // Output: 1
