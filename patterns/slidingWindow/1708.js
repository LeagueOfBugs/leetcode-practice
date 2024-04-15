const largestSubarray = (nums, k) => {
  //   //brute force
  //   let maxSum = 0;
  //   let windowSum = 0;

  //   //loop through array
  //   for (let i = 0; i < nums.length - k + 1; i++) {
  //     //keep track of sum in current window
  //     windowSum = 0;
  //     for (let j = i; j < i + k; j++) {
  //       windowSum += nums[j];
  //     }

  //     //if currentWindowSum is > maxWindowSum
  //     //set currentWindwoSum to maxWindowSum
  //     maxSum = Math.max(maxSum, windowSum);
  //   }
  //   return maxSum;

  let maxNumIndex = 0;
  let maxNum = nums[0];

  for (let i = 1; i <= nums.length - k; i++) {
    if (nums[i] > maxNum) {
      maxNumIndex = i;
      maxNum = nums[i];
    }
  }

  return nums.slice(maxNumIndex, maxNumIndex + k);
};

const nums = [1, 4, 5, 2, 3];
const k = 3;
console.log(largestSubarray(nums, k));
