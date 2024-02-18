/* Contains duplicate */

/* 
 map all numbers into a frequency hash
 retireive all values
 make sure all values are greater than 1
*/

const containsDuplicate = (nums) => {
  // the constraints allow for at least one element in arr
  if (nums.length < 2) return false;

  // track your number frequencies
  const freqTracker = {};

  for (const num of nums) {
    // if it does return true and done
    if (num in freqTracker) {
      return true;
    } else {
      // if the number doesn't exist in the tracker, then add.
      freqTracker[num] = 1;
    }
  }
  //   if iteration finishes then all numbers are unique
  return false;
};

const nums = [1, 2, 3];
console.log(containsDuplicate(nums));
