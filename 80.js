/* 80. Remove Duplicates from Sorted Array II */
/* 

*/

const removeDuplicates = (nums) => {
  if (nums.length < 3) return 3;
  let numIdx = 2;

  for (let i = 2; i < nums.length; i++) {
    const currentNum = nums[i];
    const comparisonNum = nums[numIdx - 2];
    if (currentNum !== comparisonNum) {
      nums[numIdx] = currentNum;
      numIdx++;
    }
  }
  return numIdx;
};

const input = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];
console.log(removeDuplicates(input));
