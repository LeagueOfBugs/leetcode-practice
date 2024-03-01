const deleteGreatestValue = (grid) => {
  let result = 0;
  // iterate throught arrays
  while (grid[0].length) {
    let prevValue = -Infinity;
    for (let i = 0; i < grid.length; i++) {
      // sort
      if (grid[i].length === 0) {
        continue; // Skip processing this row
      }
      const sortedGrid = grid[i].sort((a, b) => a - b);

      // get the max of each array
      const greatestValue = sortedGrid.pop();

      //   update prev value with max value
      prevValue = Math.max(prevValue, greatestValue);
    }
    result += prevValue;
  }
  return result;
};

const grid = [
  [1, 2, 4],
  [3, 3, 1],
];

console.log(deleteGreatestValue(grid));
