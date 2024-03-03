const numberGame = (nums) => {
  const sortedNumbers = nums.sort((a, b) => a - b);
  const result = [];
  while (sortedNumbers.length > 0) {
    const alice = sortedNumbers.shift();
    const bob = sortedNumbers.shift();

    result.push(bob);
    result.push(alice);
  }

  return result;
};

const nums = [5, 4, 2, 3];

console.log(numberGame(nums));
