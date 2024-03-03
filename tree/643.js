/* 643. Maximum Average Subarray I */

/* 
need variable to hold: 
    - left = 0 can be defined in for loop initiation
    - right = 0
    - maximum average
    - sum

for loop through array
adding every element to sum

you know where left and right is
as soon as right moves, it is defining the edge of the window
the left side doesnt move until certain conditions are met
when the left side moves, it means that a new iteration of the window is ready to be analyzed.

In this case we can find the difference between left and right
    - this calculation is done in indexes. k is in length form
    - you need to add one to index to prevent calculating with a length of 5
    
when the length is equal to k then we find the average of sum to k
record the average in our variable
Math.max between variable and calculation to ensure max val output

increase the index of left by one to slide the window and begin again

*/
const findMaxAverage = (nums, k) => {
  //   Left will define the Left window bounds
  let left = 0;
  let sum = 0;

  // You need to set tp -Infinity in the case that nums
  // cointain a single or multiple negative numbers
  // if defined with 0 and dealing with -ints,
  // then maxAvg always will be 0
  let maxAvg = -Infinity;

  //   right will define the right window bounds
  for (let right = 0; right < nums.length; right++) {
    // will sum every element within the array
    sum += nums[right];

    // when the difference of left and right meet k
    //  + 1 prevents us from pulling in 5 elements
    // as k represents length and left/right represent indexes

    // i.e. NO + 1 = [1, 12, -5, -6, 50]  k = 4  i = 4
    // i.e. YES = 1 = [1, 12, -5, -6]  k = 4   i = 3 + 1
    if (right - left + 1 === k) {
      // Get the max average and save to variable prev defined
      maxAvg = Math.max(maxAvg, sum / k);

      // subtract the previous bounds from the window
      sum -= nums[left];

      //   increase the window bounds
      left++;
    }
  }
  return maxAvg;
};

const nums = [1, 12, -5, -6, 50, 3];
const k = 4;

console.log(findMaxAverage(nums, k));
