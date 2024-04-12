/* 
Iterate throught nums
Keep track of freq w/ a hash

return nums with highest values in hash
if tie, any of them can be picked
*/

function topKFrequent(nums, k) {
  
  const frequency = {};

// gather the nums frequency
  for (const num of nums) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

// sort frequency keys based on values
  const sortedFrequency = Object.keys(frequency).sort(
    (a, b) => frequency[b] - frequency[a]
  );

// only return up to the kth element
  return sortedFrequency.slice(0, k);
}

const nums = [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3];
const k = 2;
console.log(topKFrequent(nums, k));
