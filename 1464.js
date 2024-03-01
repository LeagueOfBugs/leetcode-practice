const maxProduct = (nums) => {
  const sortedNums = nums.sort((a, b) => a - b);
  const endIndex = sortedNums.length - 1;
  const secondToEndIndex = sortedNums.length - 2;

  return (sortedNums[secondToEndIndex] - 1) * (sortedNums[endIndex] - 1);
};

const nums = [3, 4, 5, 2];

console.log(maxProduct(nums));
