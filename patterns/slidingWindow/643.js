const findMaxAverage = (nums, k) => {
  let windowMaxAvg = -Infinity;
  let windowSum = -Infinity;
  let windowStart = 0;

  for (let i = 0; i <= nums.length - k; i++) {
    windowSum += nums[i];

    if(i >= k - 1){
        
    }
  }
};

const nums = [1, 12, -5, -6, 50, 3];
const k = 4;
console.log(findMaxAverage(nums, k));
