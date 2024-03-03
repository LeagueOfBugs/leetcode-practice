const findCenter = (edges) => {
  const [[a, b], [c, d]] = edges;
  return a === c || b === c ? c : d;
};

const graphL = {
  1: [2],
  2: [1, 3, 4],
  3: [2],
  4: [2],
};

const graphW = {
  1: [2, 3, 4, 5],
  2: [1],
  3: [1],
  4: [1],
  5: [1],
};

console.log(
  findCenter([
    [1, 2],
    [2, 3],
    [4, 2],
  ])
);
