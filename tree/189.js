/* 189. Rotate Array */

/* 
Create two pointers
one in start one in end
swap pointers by k
use a temp vatiable 
var = start
start = end
end = temp
*/

const rotate = (nums, k) => {
  let rotateBy;
  if (k === nums.length) return nums;
  if (k > nums.length) {
    rotateBy = k % nums.length;
  } else {
    rotateBy = k;
  }

  const difference = nums.length - rotateBy;
  const firstSlice = nums.slice(difference, nums.length);
  const secondSlice = nums.slice(0, difference);

  return [...firstSlice, ...secondSlice];
};

const nums = [-1, -100, 3, 99];
const k = 2;
console.log(rotate(nums, k));
