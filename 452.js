const minArrowsToBurstBalloons = (points) => {
  if (!points || points.length === 0) {
    return 0;
  }

  points.sort((a, b) => a[1] - b[1]);

  let arrows = 1;
  let end = points[0][1];

  for (let i = 1; i < points.length; i++) {
    const balloon = points[i];
    if (balloon[0] > end) {
      arrows++;
      end = balloon[1]; 
    } else {
      end = Math.min(end, balloon[1]); 
    }
  }

  return arrows;
}

const points = [
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
];

console.log(minArrowsToBurstBalloons(points)); 
