function numSubarraysWithSum(nums, goal) {
  let prefixSumCount = { 0: 1 }; // Initialize with prefix sum 0 having count 1
  let count = 0;
  let currSum = 0;

  for (let num of nums) {
    currSum += num;
    // Check if there exists a prefix sum which makes the current sum - goal
    if (prefixSumCount[currSum - goal]) {
      count += prefixSumCount[currSum - goal];
    }
    // Increment the count of current sum
    prefixSumCount[currSum] = (prefixSumCount[currSum] || 0) + 1;
  }

  return count;
}

// Example usage:
let nums = [1, 0, 1, 0, 1];
let goal = 2;
console.log(numSubarraysWithSum(nums, goal)); // Output should be 4
