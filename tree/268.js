/* 268. Missing Number */
/* 
we can sort the array it will always start with 0

defined two pointers to compare

for loop and subtract pointers
if point net is greater than 1
    then there is a gap in the sequence and can return index of i + 1
*/

const missingNumber = (nums) => {
  // Sort the array ascending
  const sortedArray = nums.sort((a, b) => a - b);
  // we know from the contraints that the natural sequence
  //  is [0, n] starting with 0 and up
  //   any numbers other than 0 in the first index we return 0
  if (nums[0] >= 1) return 0;

  for (let i = 0; i < nums.length; i++) {
    let pointOne = nums[i];
    let pointTwo = nums[i + 1];

    // if we ever come into a situation where the net of two
    // points is greater than one, then there is a gap in the
    // sequence and can return the index of point two ot i + 1
    if (pointTwo - pointOne > 1) {
      return i + 1;
    }
  }

  // sequence is clean and no gaps were found
  return nums.length;
};

const nums = [2, 1];
console.log(missingNumber(nums));
