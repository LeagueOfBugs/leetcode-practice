const kWeakestRows = function (mat, k) {
  const counts = [];

  for (let i = 0; i < mat.length; i++) {
    let count = 0;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        count++;
      } else {
        break;
      }
    }
    counts.push({ index: i, count: count });
  }

  counts.sort((a, b) => {
    if (a.count !== b.count) {
      return a.count - b.count;
    } else {
      return a.index - b.index;
    }
  });

  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(counts[i].index);
  }

  return result;
};

const mat = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
];
const k = 3;

console.log(kWeakestRows(mat, k))