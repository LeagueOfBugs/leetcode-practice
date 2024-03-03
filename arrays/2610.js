function findMatrix(nums) {
  const freqMap = new Map();

  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const numRows = Math.max(...freqMap.values());

  const result = Array.from({ length: numRows }, () => []);

  for (const [num, freq] of freqMap) {
    for (let i = 0; i < freq; i++) {
      result[i].push(num);
    }
  }

  return result;
}

const nums = [1, 3, 4, 1, 2, 3, 1];
console.log(findMatrix(nums));
