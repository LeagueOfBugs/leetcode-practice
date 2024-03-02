const sortedSquares = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  const result = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    const leftNum = Math.pow(nums[left], 2);
    const rightNum = Math.pow(nums[right], 2);

    if (rightNum > leftNum) {
      result[i] = rightNum;
      right--;
    } else {
      result[i] = leftNum;
      left++;
    }
  }
  return result;
};

const nums = [-7, -3, 2, 3, 11];

console.log(sortedSquares(nums));
