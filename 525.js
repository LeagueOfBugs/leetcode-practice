const findMaxLength = (nums)  => {
  const countMap = new Map();
  countMap.set(0, -1); // Initialize the countMap with 0 difference at index -1
  let maxLen = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    // Increment count by 1 for 1 and decrement by 1 for 0
    let current = nums[i];
    count += current === 1 ? 1 : -1;

    if (countMap.has(count)) {
      // If the count difference has been seen before, update maxLen
      let getCount = i - countMap.get(count);
      maxLen = Math.max(maxLen, getCount);
    } else {
      // If count difference is encountered for the first time, store its index
      countMap.set(count, i);
    }
  }

  return maxLen;
}

// Example usage:
console.log(findMaxLength([0, 1, 1, 1, 1, 1, 0, 1, 0, 1]));
console.log(findMaxLength([1, 1, 0, 0, 1, 1, 0, 1, 0, 1])); 
