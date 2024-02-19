/* 209. Minimum Size Subarray Sum */

/* 
define window size --> at least two for this 
    - start = 0
    - end = 1
define min sub array
    - min length found that sums to target 

Loop through array
    -while loop

add start and end --> compare to target
    - if lower extend window to right by 1 index.
    - if higher move start to right by one and reset window range.
    - if match, save to minSubArr pointer the length of window.
*/

const minSubArrayLen = (target, nums) => {
  let left = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
    // console.log("sum", sum);
  }

  return minLength === Infinity ? 0 : minLength;
};

const target = 7;
const nums = [2, 3, 1, 2, 9, 9];
console.log(minSubArrayLen(target, nums));
