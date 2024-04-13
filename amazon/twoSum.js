/* 
two points that are going to reference indexes in nums
left is start

right end of arrray

sort array in ascending order

add two points and compare to target
if sum > target = move right down
if sum < target = move left up

if target
    return indices of nums

*/

const twoSum = (nums, target) => {
    // WITH ARRAY SORTING
  // let left = 0;
  // let right = nums.length - 1;

  // nums.sort((a,b) => a - b);

  // while(left < right){
  //     let sum = nums[left] + nums[right];
  //     if(sum === target){
  //         return [left, right]
  //     }

  //     if(sum > target){
  //         right--
  //     } else {
  //         left++
  //     }
  // }

//   WITHOUT ARRAY SORTING
  const tracker = {};

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (compliment in tracker) {
      return [tracker[compliment], i];
    } else {
      tracker[nums[i]] = i;
    }
  }
};

const nums = [3, 2, 4];
const target = 6;

console.log(twoSum(nums, target));

const twoSumNoSort = () => {};
